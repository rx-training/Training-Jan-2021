import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllActivitiesRoutingModule } from './all-activities-routing.module';
import { AllActivitiesComponent } from './all-activities/all-activities.component';


@NgModule({
  declarations: [
    AllActivitiesComponent
  ],
  imports: [
    CommonModule,
    AllActivitiesRoutingModule
  ]
})
export class AllActivitiesModule { }
