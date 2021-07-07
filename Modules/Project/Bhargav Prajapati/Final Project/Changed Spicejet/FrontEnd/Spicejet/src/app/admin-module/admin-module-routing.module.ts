import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../Authentication/log-in/log-in.component';
import { SigninComponent } from '../Authentication/signin/signin.component';
import { UnAuthoRizedComponent } from '../un-autho-rized/un-autho-rized.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AirPlaneBookingDetailsComponent } from './air-plane-booking-details/air-plane-booking-details.component';
import { AirPlaneDetailsComponent } from './air-plane-details/air-plane-details.component';
import { AirplaneCostDetailsComponent } from './airplane-cost-details/airplane-cost-details.component';
import { AirplaneTripDetailsComponent } from './airplane-trip-details/airplane-trip-details.component';
import { HotelBookingCrudComponent } from './hotel-booking-crud/hotel-booking-crud.component';
import { HotelContactCrudComponent } from './hotel-contact-crud/hotel-contact-crud.component';
import { HotelCostCrudComponent } from './hotel-cost-crud/hotel-cost-crud.component';
import { HotelDetailsCrudComponent } from './hotel-details-crud/hotel-details-crud.component';
import { RouteDetailsComponent } from './route-details/route-details.component';


const routes: Routes = [
  {path:'Admin-Module',component:LogInComponent},
  {path:'Signup',component:SigninComponent},
  {path:'Admin-Panel',component:AdminPanelComponent,children:[
    {path:'',redirectTo:'AirPlaneDetails',pathMatch:'full'},
    {path:'AirPlaneDetails',component:AirPlaneDetailsComponent},
    {path:'AirplaneCostDetails',component:AirplaneCostDetailsComponent},
    {path:'AirplaneTripDetails',component:AirplaneTripDetailsComponent},
    {path:'AirplaneBookingDetails',component:AirPlaneBookingDetailsComponent},
    {path:'HotelDetails',component:HotelDetailsCrudComponent},
    {path:'HotelCostDetails',component:HotelCostCrudComponent},
    {path:'HotelContectDetails',component:HotelContactCrudComponent},
    {path:'HotelBookingDetails',component:HotelBookingCrudComponent},
    {path:'RouteDetails',component:RouteDetailsComponent},
    
  ]},
  {path:'404',component:UnAuthoRizedComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
