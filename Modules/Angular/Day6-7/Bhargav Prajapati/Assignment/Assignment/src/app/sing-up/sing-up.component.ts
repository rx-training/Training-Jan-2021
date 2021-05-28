import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Name:string;
  MobileNumber:number;
  Email:string;
  PanCard:string;
  Address:string;
  Message:string;
  Message1:string;
  Result():void
  {
    if(this.Name == null || this.MobileNumber ==null || this.Email==null || this.PanCard==null || this.Address==null )
    {
      this.Message1="";
      this.Message="Please Fill The Details"
      
    }
    else
    {
      this.Message1="Successfully Sing Up"
      this.Message="";
    }
  }


}
