import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from '../payment/payment.component';

const routes: Routes = [
  {path:'payment',component:PaymentComponent,children:
  [
    {path:'',component:PaymentComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
