import { Component ,Inject} from '@angular/core';

import { AppConfig } from './app-config';
import { APP_CONFIG } from './app.config';
import { StudentServiceService } from './Assignment/StudentService';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: UserService,private ss:StudentServiceService) {
    this.title = config.title;
  }
    
 studentlist  = this.ss.list();

  

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser()         { this.userService.getNewUser(); }
  get user()         { return this.userService.user; }

  get userInfo()     {
    return `Current user, ${this.user.name}, is ` +
           `${this.isAuthorized ? '' : 'not'} authorized. `;
  }
}
