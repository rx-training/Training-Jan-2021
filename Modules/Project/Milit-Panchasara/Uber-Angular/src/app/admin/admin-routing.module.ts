import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRidetypeListComponent } from './admin-ridetype-list/admin-ridetype-list.component';
import { AuthGuard } from '../services/auth.guard';
import { AdminDriverListComponent } from './admin-driver-list/admin-driver-list.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminRiderListComponent } from './admin-rider-list/admin-rider-list.component';
import { AdminTripListComponent } from './admin-trip-list/admin-trip-list.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path:'riders', component: AdminRiderListComponent, canActivate:[AuthGuard, AdminGuard]},
  {path:'drivers', component: AdminDriverListComponent, canActivate:[AuthGuard, AdminGuard]},
  {path:'trips', component: AdminTripListComponent, canActivate:[AuthGuard, AdminGuard]},
  {path:'ridetypes', component: AdminRidetypeListComponent, canActivate:[AuthGuard, AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
