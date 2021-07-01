import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { AuthService } from './shared/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  loggedIn : Array<BehaviorSubject<boolean>> = [];
  title = 'FrontEnd';

  constructor(public router : Router, private dialog : MatDialog, private authService : AuthService){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        if (event.navigationTrigger === 'popstate') {
          if(this.router.url != '/'){
            console.log("H : ", this.toggle);
            if(localStorage.getItem('toggle') == 'false'){
              console.log('H');
              document.getElementById('navbar').style.display = 'flex';
              document.getElementById('main').style.backgroundImage = "url('../assets/img/Navbar/homepagebgImage.d92f90dc.webp')";
              document.getElementById('navbar').style.boxShadow = 'none';
              document.getElementById('navbar').classList.remove('onScroll');
              document.getElementById('more-info').style.display = 'block';
              document.getElementById('partner-sites').style.display = 'block';
              document.getElementById('rights-reserved').style.display = 'block';
              for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
                document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: white');
              }
            }
          }
        }
      }
    });
  }
  ngOnInit(): void {
    if(localStorage.getItem('toggle') == 'false'){
      document.getElementById('navbar').style.display = 'flex';
      document.getElementById('Home').style.display = 'block';
      document.getElementById('LoginHome').style.display = 'none';
      document.getElementById('main').style.backgroundImage = "url('../assets/img/Navbar/homepagebgImage.d92f90dc.webp')";
      document.getElementById('navbar').style.boxShadow = 'none';
      document.getElementById('navbar').classList.remove('onScroll');
      document.getElementById('more-info').style.display = 'block';
      document.getElementById('partner-sites').style.display = 'block';
      document.getElementById('rights-reserved').style.display = 'block';
      if(sessionStorage.getItem('loggedIn') == null){
        document.getElementById('login').style.display = 'block';
        document.getElementById('Home').style.display = 'block';
        document.getElementById('LoginHome').style.display = 'none';
      }
      else{
        document.getElementById('login').style.display = 'none';
        document.getElementById('LoginHome').style.display = 'block';
        document.getElementById('Home').style.display = 'none';
      }
      for(var i=0; i<document.querySelectorAll('nav ul li a').length; i++){
        document.querySelectorAll('nav ul li a')[i].setAttribute('style', 'color: white');
      }
    }
  }

  toggle = false;
  @HostListener('window:scroll', ['$event'])


  onWindowScroll() {
    let element = document.getElementById('navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('onScroll');
    } else {
      element.classList.remove('onScroll');
    }
  }

  change(){
    if(this.router.url == '/'){
      document.getElementById('navbar').style.display = 'none';
      document.getElementById('main').style.backgroundImage = 'none';
      document.getElementById('more-info').style.display = 'none';
      document.getElementById('partner-sites').style.display = 'none';
      document.getElementById('rights-reserved').style.display = 'none';
    }
  }

  openDialogLogin(){
    const dialogRef = this.dialog.open(LoginComponent, {height: '70%', width: '500px'});
    this.router.events.subscribe(() => { 
      dialogRef.close();
    });
  }

  logout(){
    sessionStorage.removeItem('loggedIn');
    document.getElementById('login').style.display = 'block';
    document.getElementById('LoginHome').style.display = 'none';
    document.getElementById('Home').style.display = 'block';
  }

  editProfile(){
    this.router.navigate(['home/updateProfile']);
  }
}


// , {height: '100%', width: '500px', closeOnNavigation: true, position: {top: '0%', right: '0%'}}