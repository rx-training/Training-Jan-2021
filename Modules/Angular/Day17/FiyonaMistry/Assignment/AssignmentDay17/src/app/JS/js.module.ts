import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JSRoutingModule } from './js-routing.module';
import { JSComponent } from './js/js.component';


@NgModule({
  declarations: [
    JSComponent
  ],
  imports: [
    CommonModule,
    JSRoutingModule
  ]
})
export class JSModule { }
