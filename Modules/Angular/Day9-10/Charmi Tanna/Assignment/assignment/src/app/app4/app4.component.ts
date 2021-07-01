import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-app4',
  templateUrl: './app4.component.html',
  styleUrls: ['./app4.component.css']
})
export class App4Component implements OnInit {

  loginForm= new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email])
  })
  constructor() { }

  ngOnInit(): void {
  }
  get email()
  {
    return this.loginForm.get('email');
  }

}
