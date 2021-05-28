import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg: string = '';

  constructor(public authService: AuthService) {
    this.msg = '';
  }

  login(username: string, password: string): boolean {
    this.msg = '';
    if (!this.authService.login(username, password)) {
      this.msg = 'Incorrect credentials.';
      setTimeout(function() {
      }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
  ngOnInit() {
  }

}
