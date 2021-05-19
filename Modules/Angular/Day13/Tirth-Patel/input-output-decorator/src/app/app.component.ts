import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output-decorator';
  parentData :any ;

  sendData(formvalue){
    this.parentData = formvalue;
  }
}
