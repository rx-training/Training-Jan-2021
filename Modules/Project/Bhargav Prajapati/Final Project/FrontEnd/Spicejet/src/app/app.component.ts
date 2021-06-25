import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spicejet';
  
  
  flag1:Boolean=true;
  flag2:boolean=false;

  DropDownList1:Array<string>=["SpiceMAX","Seat + Meal Combo","Priority Cheack-in","Visa Sevices","Spice Assurance","Friend And Family","Student Discount","Zero Cancellation","Spice Plus","Govt.Employee"];
  DropDownList2:Array<string>=["Hot Meals","You 1st","International Connaction Baggage","MyFlexiPlane","Travel Insurance","Senior Citizen Discount","Extra Seat","Covid-19 RT-PCR Test","Indian Armed Forces Personnel","International SIM Cards"]
  constructor()
  {
    
  }
  
  
 
  
  

  Hide()
  {
    this.flag1=false;
    this.flag2=true;
  }
 

  

  
}
