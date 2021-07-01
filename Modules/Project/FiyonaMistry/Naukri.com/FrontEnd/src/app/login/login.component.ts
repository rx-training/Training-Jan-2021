import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { AuthService } from '../shared/Services/auth.service';
import { emailValidation } from '../shared/Validations/EmailValidation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  loginForm: FormGroup;
  subscription: Subscription;
  fieldTextType : boolean = false;
  constructor(private authService: AuthService, private router: Router, private fb : FormBuilder, private dialog : MatDialog) {}

  registerNow(){
    this.router.navigate(['/registerNow']);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }
  
  onSubmit() {
    this.subscription = this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe((response: any) => {
        alert('Logged in successfully');
        console.log(response);
        this.router.navigate(['/']);
      });
      this.dialog.closeAll();
      // if(sessionStorage.getItem('loggedIn') == null){
      //   console.log('not logged in');
      //   document.getElementById('login').style.display = 'block';
      //   document.getElementById('Home').style.display = 'block';
      //   document.getElementById('LoginHome').style.display = 'none';
      // }
      // else if(sessionStorage.getItem('loggedIn') != null){
      //   console.log('logged in');
        document.getElementById('login').style.display = 'none';
        document.getElementById('LoginHome').style.display = 'block';
        document.getElementById('Home').style.display = 'none';
      // }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, emailValidation()])],
      password: ['', Validators.required]
    });
  }

  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

  openDialogForgotPassword(){
    this.dialog.open(ForgotPasswordComponent,  {height: '100%', width: '500px', closeOnNavigation: true, position: {top: '0%', right: '0%'}});
  }
}