import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  email: string;
  senha: string;

  constructor( private userService:UserService ) {}
  login(){ this.userService.logIn(this.email, this.senha);  }

}