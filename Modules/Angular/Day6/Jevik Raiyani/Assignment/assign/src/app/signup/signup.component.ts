import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string ="jevik";
  pass: string= "aaa";
  constructor() { }

  ngOnInit(): void {
  }

  valid(){
    return this.name =="admin" && this.pass =="admin" ? "SuccessFull" : "Failed";
  }
}
