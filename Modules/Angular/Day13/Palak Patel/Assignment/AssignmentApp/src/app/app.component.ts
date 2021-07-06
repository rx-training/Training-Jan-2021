import { Component } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentApp';
  newStudentData : IStudent[] = [];

  addData(newData:IStudent){
    this.newStudentData.push(newData);
  }
}
