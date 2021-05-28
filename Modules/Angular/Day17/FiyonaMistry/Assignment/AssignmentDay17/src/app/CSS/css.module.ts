import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { CSSComponent } from './css/css.component';


@NgModule({
  declarations: [
    CSSComponent
  ],
  imports: [
    CommonModule,
    CSSRoutingModule
  ]
})
export class CSSModule { }
