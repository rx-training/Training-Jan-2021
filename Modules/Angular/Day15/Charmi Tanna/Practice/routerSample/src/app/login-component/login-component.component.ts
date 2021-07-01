import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  Loginform : any =FormGroup;
  Submitted =false;
  constructor(private formBuilder : FormBuilder) 
  {
    this.Loginform = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
    });
   }

  ngOnInit(): void {
    
  }
  Submit()
  {
    this.Submitted = true;
    alert("Login Form submitted sucessfully");
    this.Loginform.reset();
  }

}
