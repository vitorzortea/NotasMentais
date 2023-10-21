import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AuthGuard } from "@angular/fire/auth-guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(configFire)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const configFire = {
      apiKey: "AIzaSyCWRSN9OPbZacGGQtD-tVeY6C2TPm2NP-0",
      authDomain: "notas-mentais.firebaseapp.com",
      projectId: "notas-mentais",
      storageBucket: "notas-mentais.appspot.com",
      messagingSenderId: "688179318845",
      appId: "1:688179318845:web:42400a995748668e1dda54"
    }
