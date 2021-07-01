import { AllOrdersComponent } from './../all-orders/all-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'allorders',component:AllOrdersComponent,children:
  [
    {path:'',component:AllOrdersComponent}
  ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllOrderRoutingModule { }
