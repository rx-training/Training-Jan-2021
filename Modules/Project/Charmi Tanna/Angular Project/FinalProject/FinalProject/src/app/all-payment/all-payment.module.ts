import { AllPaymentsComponent } from './../all-payments/all-payments.component';
import { AppComponent } from './../app.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPaymentRoutingModule } from './all-payment-routing.module';


@NgModule({
  declarations: [
    AllPaymentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AllPaymentRoutingModule
  ]
})
export class AllPaymentModule { }
