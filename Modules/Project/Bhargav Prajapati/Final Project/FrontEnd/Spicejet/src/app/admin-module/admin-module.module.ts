import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from '../admin-module/admin-module.component';
import {ReactiveFormsModule}from'@angular/forms';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AirPlaneDetailsComponent } from './air-plane-details/air-plane-details.component';
import { AirplaneCostDetailsComponent } from './airplane-cost-details/airplane-cost-details.component';
import { AirplaneTripDetailsComponent } from './airplane-trip-details/airplane-trip-details.component';
import { AirPlaneBookingDetailsComponent } from './air-plane-booking-details/air-plane-booking-details.component';
import { HotelDetailsCrudComponent } from './hotel-details-crud/hotel-details-crud.component';
import { HotelCostCrudComponent } from './hotel-cost-crud/hotel-cost-crud.component';
import { HotelContactCrudComponent } from './hotel-contact-crud/hotel-contact-crud.component';
import { HotelBookingCrudComponent } from './hotel-booking-crud/hotel-booking-crud.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    AdminPanelComponent,
    AirPlaneDetailsComponent,
    AirplaneCostDetailsComponent,
    AirplaneTripDetailsComponent,
    AirPlaneBookingDetailsComponent,
    HotelDetailsCrudComponent,
    HotelCostCrudComponent,
    HotelContactCrudComponent,
    HotelBookingCrudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
