import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-module',
  templateUrl: './booking-module.component.html',
  styleUrls: ['./booking-module.component.css']
})
export class BookingModuleComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }

  public show:boolean = true;
  toggle()
{
  this.show = false

}
showbutton()
{
  this.show=true;
}

}
