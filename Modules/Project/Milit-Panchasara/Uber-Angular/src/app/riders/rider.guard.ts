import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as CryptoJS from 'crypto-js';
import { GlobalConstants } from 'src/app/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RiderGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) {
    
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem('user') == null) {
      
      this.router.navigate(['/']);
      return false;
    }

    let decryptedUser = (CryptoJS.AES.decrypt(localStorage.getItem('user'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
    
    let user = JSON.parse(decryptedUser);

    if(user.userRole != 'rider'){
      if(user.userRole == 'admin') {
        this.router.navigate(['/admin']);
      }
      else {
        this.router.navigate(['/']);
      }
      return false;
    }

    return true;
  }
  
}
