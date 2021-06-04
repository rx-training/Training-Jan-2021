import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllPlaysRoutingModule } from './all-plays-routing.module';
import { AllPlaysComponent } from './all-plays/all-plays.component';

@NgModule({
  declarations: [
    AllPlaysComponent
  ],
  imports: [
    CommonModule,
    AllPlaysRoutingModule
  ]
})
export class AllPlaysModule { }
