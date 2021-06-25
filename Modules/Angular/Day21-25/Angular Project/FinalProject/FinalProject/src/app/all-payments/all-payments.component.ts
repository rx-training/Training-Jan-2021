import { PaymentService } from './../PaymentService';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-payments',
  templateUrl: './all-payments.component.html',
  styleUrls: ['./all-payments.component.css']
})
export class AllPaymentsComponent implements OnInit {
  allPayments: any;
  constructor(private formBuilder : FormBuilder,private paymentService : PaymentService) { }

  ngOnInit(): void {
    this.loadAllPayments();
  }

  loadAllPayments() {  
    this.paymentService.getAllPayments().subscribe(data=>{ this.allPayments = data;console.log(data)});
   }  

}
