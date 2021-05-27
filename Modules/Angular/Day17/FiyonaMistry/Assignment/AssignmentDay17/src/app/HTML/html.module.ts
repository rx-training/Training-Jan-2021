import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { HTMLComponent } from './html/html.component';


@NgModule({
  declarations: [
    HTMLComponent
  ],
  imports: [
    CommonModule,
    HTMLRoutingModule
  ]
})
export class HTMLModule { }
