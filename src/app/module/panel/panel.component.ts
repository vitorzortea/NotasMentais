import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { UserService } from 'src/app/services/user.service';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { trace } from '@angular/fire/compat/performance';
import { CalendarTypeView } from 'primeng/calendar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
    loading=false
    ViewMounth = new Date()
    myDate = [];
    isMenu=false
    date = new Date()
    text = ''
    docDatesNow;

    

    public readonly persistenceEnabled$: Observable<boolean>;
    public readonly testDocValue$: Observable<any>;
    
    constructor(
      private userService:UserService,
      private firestore: AngularFirestore
    ){
      this.getNote();  
      this.getMonth();  
    }
    ngOnInit() {}

    
    logout(){this.userService.logOut()}


    getNote(){
      this.loading = false;
      this.firestore.doc(this.notesDoc).valueChanges().subscribe((e:{texto:string}|undefined)=>{
        this.loading = true;
        this.text = (e)?e.texto:'';
      });
    }
    getMonth(){
      this.myDate = [];
      this.firestore.doc(this.dateDoc).valueChanges().subscribe((e:any|undefined)=>{
        this.myDate = (e)? Object.keys(e).map(e=>Number(e)) : [];
        this.docDatesNow = e;
      });

    }

    save(){
      const daySelect = Number(moment(this.date).format('DD'));
      if(this.text){
        if(this.isDay){
          //Update
          console.log("Update");
          this.firestore.doc(this.notesDoc).update({texto:this.text}).then((e)=>{
            Swal.fire({
              icon: 'success',
              text: 'Nota editada com sucesso',
              showConfirmButton: false,
              timer: 2000,
              position: 'top',
            })
          })
        }else{
          //Create
          console.log("Create");
          this.firestore.doc(this.notesDoc).set({texto:this.text}).then((e)=>{
            const newDates = {...this.days[daySelect], ...this.docDatesNow};
            console.log("newDates: ", newDates)
            this.firestore.doc(this.dateDoc).set(newDates).then((e)=>{
              Swal.fire({
                icon: 'success',
                text: 'Nota criada com sucesso',
                showConfirmButton: false,
                timer: 2000,
                position: 'top',
              })
            })
          })
        }
      }else{
        if(this.isDay){
          //Delete
          Swal.fire({
            icon: 'warning',
            title: 'Você tem certeza?',
            text: "Essa nota será deletada e não poderá reuperar",
            showCancelButton: true,
            confirmButtonText: 'Sim',
            confirmButtonColor: '#379ea8',
            cancelButtonText: 'Não',
            cancelButtonColor: '#d5e1e1',
          }).then((result) => {
            if (result.isConfirmed) {              
              this.firestore.doc(this.notesDoc).delete().then((e)=>{
                console.log("Delete: ", e);
                delete this.docDatesNow[daySelect];
                console.log("docDatesNow: ", this.docDatesNow)
                this.firestore.doc(this.dateDoc).set(this.docDatesNow).then((e)=>{
                  Swal.fire({
                    icon: 'success',
                    text: 'Nota deletada com sucesso',
                    showConfirmButton: false,
                    timer: 2000,
                    position: 'top',
                  })
                })
              })
            }
          })
        }else{
          //Nada
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Não há nota para ser salva',
            showConfirmButton: false,
            timer: 2000,
            position: 'top',
          })
        }
      }
    }








    changeMonth(event){
      this.ViewMounth = new Date(event.year, event.month-1);
      this.getMonth();
    }
    paintDay(date){
      return this.myDate.includes(date.day)
    }








    days = {
      1:{1:true},
      2:{2:true},
      3:{3:true},
      4:{4:true},
      5:{5:true},
      6:{6:true},
      7:{7:true},
      8:{8:true},
      9:{9:true},
      10:{10:true},
      11:{11:true},
      12:{12:true},
      13:{13:true},
      14:{14:true},
      15:{15:true},
      16:{16:true},
      17:{17:true},
      18:{18:true},
      19:{19:true},
      20:{20:true},
      21:{21:true},
      22:{22:true},
      23:{23:true},
      24:{24:true},
      25:{25:true},
      26:{26:true},
      27:{27:true},
      28:{28:true},
      29:{29:true},
      30:{30:true},
      31:{31:true},
    }
    get isDay(){ return this.myDate.includes(Number(moment(this.date).format('DD'))); }
    get textButton(){ if(this.text){if(this.isDay){return 'Editar'}else{return 'Salvar'}}else{if(this.isDay){return 'Deletar'}else{return 'Salvar'}} }
    get printDate(){ return moment(this.date).format('DD/MM/YY') }
    get dateDoc(){ return '/dates/'+moment(this.ViewMounth).format('YYYY-MM')+'-'+this.userService.getUser.uid }
    get notesDoc(){ return '/notes/'+moment(this.date).format('YYYY-MM-DD')+'-'+this.userService.getUser.uid }
}
