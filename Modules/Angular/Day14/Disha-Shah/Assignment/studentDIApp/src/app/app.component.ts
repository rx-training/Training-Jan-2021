import { Component } from '@angular/core';
import { IStudent } from './models/IStudent';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'studentDIApp';

  listData: Array<IStudent> = []; 

  editData: IStudent = {id: 0, name: "", address: ""}; ​

  AddData(arr:StudentService){  ​
    this.listData=arr.getList();  ​
  }  ​

  EditData(student: IStudent){
     this.editData = student;
  }
}
