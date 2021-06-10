import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  Name:string="niraj sapra";
  Address:string="Bhavnagar";
  PanNumber:number=124568;
  Photograph:string='Niraj.png';
  Signup:string='Signup';
  constructor() { }
 
  ngOnInit(): void {
  }
  Signupuser(){
    return ("Finally Data is "+this.Name+" city is "+this.Address+" finally pannumber is "+this.PanNumber+" finally photograph is "+this.Photograph);
  }
}
