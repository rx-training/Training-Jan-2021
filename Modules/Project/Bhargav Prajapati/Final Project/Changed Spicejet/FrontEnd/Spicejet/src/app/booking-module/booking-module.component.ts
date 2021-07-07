import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking-module',
  templateUrl: './booking-module.component.html',
  styleUrls: ['./booking-module.component.css']
})
export class BookingModuleComponent implements OnInit {

  
  constructor() {
    
   }

   DropDownList1:Array<string>=["SpiceMAX","Seat + Meal Combo","Priority Cheack-in","Visa Sevices","Spice Assurance","Friend And Family","Student Discount","Zero Cancellation","Spice Plus","Govt.Employee"];
  DropDownList2:Array<string>=["Hot Meals","You 1st","International Connaction Baggage","MyFlexiPlane","Travel Insurance","Senior Citizen Discount","Extra Seat","Covid-19 RT-PCR Test","Indian Armed Forces Personnel","International SIM Cards"]

  ngOnInit(): void {
      this.Login();
  }

  public show:boolean = true;
  toggle()
{
  this.show = false

}
showbutton()
{
  this.show=true;
}

Islogedin:boolean=false;

Login()
{
  if(sessionStorage.getItem("token")!==null)
  {
      console.log(sessionStorage.getItem("token"));
      this.Islogedin=true;
  }
  
}
Logout()
{
  sessionStorage.removeItem("token");
  this.Islogedin=false;
}




}
