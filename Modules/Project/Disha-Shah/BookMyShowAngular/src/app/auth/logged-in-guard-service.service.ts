import { Injectable } from '@angular/core';
import { RegisterService } from './register.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuardServiceService {

  constructor(private authService: RegisterService) {}

  canActivateUser(): boolean {
    return this.authService.isLoggedInUser();
  }

  canActivateAdmin(): boolean{
    return this.authService.isLoggedInAdmin();
  }
}
