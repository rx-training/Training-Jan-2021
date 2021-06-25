import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModuleComponent } from './admin-module.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AirPlaneBookingDetailsComponent } from './air-plane-booking-details/air-plane-booking-details.component';
import { AirPlaneDetailsComponent } from './air-plane-details/air-plane-details.component';
import { AirplaneCostDetailsComponent } from './airplane-cost-details/airplane-cost-details.component';
import { AirplaneTripDetailsComponent } from './airplane-trip-details/airplane-trip-details.component';
import { HotelBookingCrudComponent } from './hotel-booking-crud/hotel-booking-crud.component';
import { HotelContactCrudComponent } from './hotel-contact-crud/hotel-contact-crud.component';
import { HotelCostCrudComponent } from './hotel-cost-crud/hotel-cost-crud.component';
import { HotelDetailsCrudComponent } from './hotel-details-crud/hotel-details-crud.component';

const routes: Routes = [
  {path:'Admin-Module',component:AdminModuleComponent},
  {path:'Admin-Panel',component:AdminPanelComponent,children:[
    {path:'',redirectTo:'AirPlaneDetails',pathMatch:'full'},
    {path:'AirPlaneDetails',component:AirPlaneDetailsComponent},
    {path:'AirplaneCostDetails',component:AirplaneCostDetailsComponent},
    {path:'AirplaneTripDetails',component:AirplaneTripDetailsComponent},
    {path:'AirplaneBookingDetails',component:AirPlaneBookingDetailsComponent},
    {path:'HotelDetails',component:HotelDetailsCrudComponent},
    {path:'HotelCostDetails',component:HotelCostCrudComponent},
    {path:'HotelContectDetails',component:HotelContactCrudComponent},
    {path:'HotelBookingDetails',component:HotelBookingCrudComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
