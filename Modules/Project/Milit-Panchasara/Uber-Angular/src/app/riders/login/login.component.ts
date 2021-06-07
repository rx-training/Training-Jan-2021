import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { GlobalConstants } from 'src/app/common/global-constants';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  contactNumber:number=null;
  isWrong:boolean = false;
  cryptoPassword = GlobalConstants.cryptoPassword;
  
  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // stores number and redirects to password page
  passNumber() {
    if(this.contactNumber != null && this.contactNumber.toString().length != 10) {
      this.isWrong = true;
      return;
    }
    this.isWrong = false;
    this.authService.loginContactNumber = this.contactNumber;
    // this.contactNumberOutput.emit(this.contactNumber.toString() );
    this.router.navigate(['/rider/login-password']);
  }
}
