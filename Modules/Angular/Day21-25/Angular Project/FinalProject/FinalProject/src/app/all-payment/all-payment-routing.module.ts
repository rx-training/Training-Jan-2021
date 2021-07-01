import { AllPaymentsComponent } from './../all-payments/all-payments.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'allpayments',component:AllPaymentsComponent,children:
  [
    {path:'',component:AllPaymentsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPaymentRoutingModule { }
