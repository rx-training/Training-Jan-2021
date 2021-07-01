import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routeingdemo';
  constructor(private router:Router){

  }
  navstudent(){
    this.router.navigate(["/student"]);
  }
  navfaculat(){
    //console.log("navfacult");
    this.router.navigate(["/facult"]);
  }
}
