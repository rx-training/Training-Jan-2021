import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name : string;
  phoneNumber : number;
  DOB : Date;
  address : string;
  panNumber : number;

  constructor() { }

  ngOnInit(): void {
  }

}
