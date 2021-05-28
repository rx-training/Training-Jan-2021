import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-firstApp';
  val1:number =10;
  marks:Array<number>=[10,15,15];
  dob:Date =new Date();
  status:boolean = true;

  returnString(){
    return "Welcome to the Appllication";
  }

}
