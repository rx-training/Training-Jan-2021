import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PaymentList } from './../PaymentList';
import { PaymentService } from './../PaymentService';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  hello :FormGroup;
  allPayments : any;
  dataSaved = false;
  srIdUpdate = 0;
  emailId : any;
  orderId : number;
  payment : PaymentList;
  constructor(private formBuilder : FormBuilder,private paymentService : PaymentService)
  {
    this.hello = this.formBuilder.group({
      name : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      pinCode :  ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      address : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9a-zA-Z]+$')])],
      landmark : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      city : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      state : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      country : ['',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z]+$')])],
      mobile :  ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      month : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      year : ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])],
      cvv :  ['',Validators.compose([Validators.required,Validators.pattern('^[0-9]+$')])]
    })
  }

  ngOnInit(): void {
    this.emailId = localStorage.getItem('emailId');
    var orderId = localStorage.getItem('count');
    this.orderId = parseInt(orderId);
    this.paymentService.getAllPayments().subscribe(data=>{
    console.log(data);
    }
    );
    // this.userId = localStorage.getItem('emailId');
    // this.loadAllPayments();
  }

  loadAllPayments() {  
    this.paymentService.getAllPayments().subscribe(data=>{ this.allPayments = data;console.log(data)});
  }  

   onFormSubmit(value : any) {  
    this.loadAllPayments();
    var payment : PaymentList={
      orderId : 0,
      emailId : "",
      name :  "" ,
      pinCode :  "",
      address : "",
      landmark :  "",
      city : "" ,
      state :  "",
      country :  "",
      mobile :  0,
      month : 0 ,
      year : 0 ,
      cvv :  0,
    };
     payment.orderId = this.orderId;
     payment.emailId = this.emailId;
     payment.name = value.name;
     payment.pinCode = value.pinCode;
     payment.address = value.address;
     payment.landmark =  value.landmark;
     payment.city = value.city;
     payment.state = value.state;
     payment.country = value.country;
     payment.mobile = value.mobile;
     payment.month = value.month;
     payment.year = value.year;
     payment.cvv = value.cvv;
     this.CreatePayment(payment);
    // alert(allOrders.srId);
    // this.dataSaved = false;  
    // this.payment = this.hello.value; 
    // console.log(this.payment); 
    // this.CreatePayment(this.payment);  
    // console.log(this.hello.value);
    this.hello.reset();  
  }  

  CreatePayment(payment: PaymentList) {  
     this.paymentService.createPayment(payment).subscribe(  
       () => {  
         this.dataSaved = true;  
         alert('Record saved Successfully');  
        //  this.loadAllPayments();
        //  this.srIdUpdate = srId; 
        //  payment.srId = srId;
        //  this.hello.reset();  
       }
     );  
     }
  
  //  onFormSubmit(value : any) {  
  //    alert("hello");
  //    this.dataSaved = false;  
  //    const payment = this.hello.value;  
  //    this.CreatePayment(payment );  
  //    console.log(this.hello.value);
  //    this.hello.reset();  
  //  }  

  //  CreatePayment(payment: PaymentList) {  
  //   alert("welcome");
  //   console.log(payment);
  //      this.paymentService.createPayment(payment).subscribe(  
  //        () => {  
  //          this.dataSaved = true;  
  //          alert('Record saved Successfully');  
  //          this.loadAllPayments();
  //         //  this.srIdUpdate = srId; 
  //         //  payment.srId = srId;
  //          this.hello.reset();  
  //        }
  //      );          
  //      }
  //  resetForm() {  
  //    this.hello.reset();  
  //    this.dataSaved = false;  
  //  }  
}
