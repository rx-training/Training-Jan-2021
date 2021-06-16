import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as CryptoJS from 'crypto-js';
import { GlobalConstants } from 'src/app/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router:Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      try{

        if(localStorage.getItem('user') == null) {
          
          this.router.navigate(['/']);
          return false;
        }

        if(localStorage.getItem('session') == null) {
          localStorage.removeItem('user');
          this.router.navigate(['/']);
          return false;
        }

        let decryptedSession = (CryptoJS.AES.decrypt(localStorage.getItem('session'), GlobalConstants.cryptoPassword)).toString(CryptoJS.enc.Utf8);
        
        if((new Date(decryptedSession)).getTime() + (1000*60*60*3) < (new Date).getTime()) // 3 hours 
        {
          localStorage.removeItem('user');
          localStorage.removeItem('session');
          this.router.navigate(['/']);
        }
        
      }
      catch {
        if(localStorage.getItem('user') != null) {
          localStorage.removeItem('user');
        }

        if(localStorage.getItem('session') != null) {
          localStorage.removeItem('session');
        }

        this.router.navigate(['/']);
      }

    return true;
  }
  
}
