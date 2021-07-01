import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllSportsRoutingModule } from './all-sports-routing.module';
import { AllSportsComponent } from './all-sports/all-sports.component';

@NgModule({
  declarations: [
    AllSportsComponent
  ],
  imports: [
    CommonModule,
    AllSportsRoutingModule
  ]
})
export class AllSportsModule { }
