import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { CalendarModule } from 'primeng/calendar';

import { QuillModule } from 'ngx-quill'
import { configFire } from 'src/app/app.module';
import { AngularFireModule } from '@angular/fire/compat';


@NgModule({
  declarations: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule,
    CalendarModule,
    QuillModule.forRoot(),
    AngularFireModule.initializeApp(configFire),
  ]
})
export class PanelModule { }
