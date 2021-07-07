import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spicejet';
  
  
  flag1:Boolean=true;
  flag2:boolean=false;

  
  constructor()
  {
    
  }
  
  
 
  
  

  Hide()
  {
    this.flag1=false;
    this.flag2=true;
  }
 

  

  
}
