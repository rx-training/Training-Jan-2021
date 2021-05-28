import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:string = "";
  address1 :string = "";
  address2:string = "";
  panNumber:string="";
  //Regex = "/[A-Z]{5}[0-9]{4}[A-Z]{1}$/";


}
