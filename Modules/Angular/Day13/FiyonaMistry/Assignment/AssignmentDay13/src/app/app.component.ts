import { Component } from '@angular/core';
import { IStudent } from './IStudent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AssignmentDay13';

  StudentList : Array<IStudent>[] = [];

  submit(newStudent : any[]){
    this.StudentList = newStudent;
  }
}
