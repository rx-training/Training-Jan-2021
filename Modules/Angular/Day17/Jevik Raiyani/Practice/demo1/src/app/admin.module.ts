import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { adminRoutesComponent, AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    adminRoutesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: []
})
export class AdminModule { }
