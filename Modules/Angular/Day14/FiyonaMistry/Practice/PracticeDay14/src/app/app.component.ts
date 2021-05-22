import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PracticeDay14';

  constructor(private userService : UserService){
  }

  get user(){
    return this.userService.user;
  }

  get isAuthorized(){
    return this.user.isAuthorized;
  }

  nextUser(){
    return this.userService.getNewUser();
  }

  get userInfo(){
    return `Current User : ${this.user.name}, is ${this.isAuthorized ? '' : 'not'} authorized`;
  }
}
