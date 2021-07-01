import { MenComponent } from './men.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { MenRoutingModule } from './men-routing.module';


@NgModule({
  declarations: [
    MenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MenRoutingModule
  ]
})
export class MenModule { }
