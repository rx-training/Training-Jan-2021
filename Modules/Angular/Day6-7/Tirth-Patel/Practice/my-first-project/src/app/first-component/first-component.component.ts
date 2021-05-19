import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {AppModule} from '../app.module';
import{FormsModule} from '@angular/forms'
@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
 buttonchange = false;
  constructor(){
    setTimeout(() => {
      this.buttonchange = true;
    }, 5000);
  }

 name = "";
 birthday= "";
}
