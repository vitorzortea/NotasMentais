import { Injectable, Optional } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   

  constructor(
    @Optional() public auth: Auth,
    private router: Router,
  ) {}
  
  get getUser():User{ return this.auth.currentUser }


  logIn(email, senha) {
    signInWithEmailAndPassword(this.auth, email, senha)
    .then(
      (e)=>{
        this.router.navigateByUrl('/');
    }).catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Erro:',
        text: this.hubMensagem[error.code],
      })
      console.log("ERRo: ", Object.keys(error));
      console.log("ERRo: ", error.code);
      console.log("ERRo: ", error.customData);
      console.log("ERRo: ", error.name);
    });
  }

  logOut(){
    signOut(this.auth)
    .then((e)=>{
      this.router.navigateByUrl('/auth');
    })
  }

  hubMensagem = {
    "auth/invalid-login-credentials": 'Usuário ou Senha incorretos',
    "auth/missing-email": 'E-mail é obrigatório',
    "auth/invalid-email": 'E-mail invalido',
    "auth/missing-password": 'Senha é obrigatório',
  }
}