import { FormsModule } from '@angular/forms';
import { KidsComponent } from './kids.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KidsRoutingModule } from './kids-routing.module';


@NgModule({
  declarations: [
    KidsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    KidsRoutingModule
  ]
})
export class KidsModule { }
