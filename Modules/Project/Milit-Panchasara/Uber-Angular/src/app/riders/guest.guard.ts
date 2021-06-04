import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { GlobalConstants } from '../common/global-constants';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
    
      if(localStorage.getItem('user') != null) {

        let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
        let user = JSON.parse(decryptedUser);

        if(user.userRole == 'rider'){
          this.router.navigate(['/rider/dashboard']);
          return false;
        }
        if(user.userRole == 'admin'){
          this.router.navigate(['/admin']);
          return false;
        }
        return true;
      }

      




    return true;
  }
  
}
