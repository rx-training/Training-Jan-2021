import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentFormApp';

  listData = [];  ​

  IsSubmit: boolean;

  AddData(reply){  ​
    this.listData=reply.list;  ​
    this.IsSubmit = reply.IsSubmitted;
  }  
}
