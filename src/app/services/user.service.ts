import { Injectable, Optional } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
    .then((e)=>{this.router.navigateByUrl('/');});
  }  
  logOut(){
    signOut(this.auth)
    .then((e)=>{
      this.router.navigateByUrl('/');
      //window.location.reload();
    })
  }
}