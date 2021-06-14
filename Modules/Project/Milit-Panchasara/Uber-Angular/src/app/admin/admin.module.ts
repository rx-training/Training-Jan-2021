import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminloginPasswordFormComponent } from './adminlogin-password-form/adminlogin-password-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRiderListComponent } from './admin-rider-list/admin-rider-list.component';
import { AdminDriverListComponent } from './admin-driver-list/admin-driver-list.component';
import { AdminTripListComponent } from './admin-trip-list/admin-trip-list.component';
import { AdminRidetypeListComponent } from './admin-ridetype-list/admin-ridetype-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { RiderBlockButtonRenderer } from './rider-block-button/rider-block-button.component';


@NgModule({
  declarations: [
    AdminloginComponent,
    AdminloginPasswordFormComponent,
    AdminHomeComponent,
    AdminRiderListComponent,
    AdminDriverListComponent,
    AdminTripListComponent,
    AdminRidetypeListComponent,
    RiderBlockButtonRenderer
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([RiderBlockButtonRenderer])
  ]
})
export class AdminModule { }
