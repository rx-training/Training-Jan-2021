import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  fieldTextType : boolean = false;
  ForgotPassword : FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  isValidInput(fieldName): boolean {
    return this.ForgotPassword.controls[fieldName].invalid &&
      (this.ForgotPassword.controls[fieldName].dirty || this.ForgotPassword.controls[fieldName].touched);
  }

  onSubmit(){
    
  }

}
