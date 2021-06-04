import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllEventsRoutingModule } from './all-events-routing.module';
import { AllEventsComponent } from './all-events/all-events.component';

@NgModule({
  declarations: [
    AllEventsComponent
  ],
  imports: [
    CommonModule,
    AllEventsRoutingModule
  ]
})
export class AllEventsModule { }
