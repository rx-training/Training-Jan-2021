import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverDashboardComponent } from './driver-dashboard/driver-dashboard.component';
import { AuthGuard } from '../services/auth.guard';
import { DriverGuard } from './driver.guard';
import { DriverCurrentTripComponent } from './driver-current-trip/driver-current-trip.component';

const routes: Routes = [
  {path:'dashboard', component: DriverDashboardComponent, canActivate: [AuthGuard, DriverGuard]},
  {path:'current-trip', component: DriverCurrentTripComponent, canActivate: [AuthGuard, DriverGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
