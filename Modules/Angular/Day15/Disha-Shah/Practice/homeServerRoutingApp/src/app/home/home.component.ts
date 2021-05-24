import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg: string = '';

  constructor(private router: Router, public authService: AuthService) { 
    this.msg = '';
  }

  onLoadServer(id: number){
    this.router.navigate(['/server', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
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
