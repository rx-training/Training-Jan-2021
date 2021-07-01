import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { ConfirmEventComponent } from './confirm-event/confirm-event.component';


@NgModule({
  declarations: [
    ConfirmEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
