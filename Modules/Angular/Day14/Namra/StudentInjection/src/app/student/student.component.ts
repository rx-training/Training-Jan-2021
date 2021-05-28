import { Component, OnInit } from '@angular/core';
import { log } from '../log';
import { LoggerService } from '../logger.service';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService,LoggerService]
})
export class StudentComponent implements OnInit {

  list: Array<Student> = [];
  student: Student = { Id: 0, Name: '', Address: '' };
  logs : Array<log> = [];
  constructor(private stdService: StudentService, private logService : LoggerService) {
    this.list = stdService.StudentList();
    this.logs = logService.GetLogs();
  }
  AddStudent() {
    if (this.student.Id == 0 || this.student.Name == '' || this.student.Address == '') {
      this.logService.AddLog(false, this.student, 'Insert');
      alert("Please enter valid data...");
      this.reset();
    }
    else if(this.list.find(s=> s.Id == this.student.Id))
    {
      this.logService.AddLog(false, this.student, 'Insert');
      alert('Id is already assigned..');
      this.reset();
    }
    else {
      this.stdService.AddStudent(this.student);
      this.logService.AddLog(true, this.student, 'Insert');
      this.reset();
    }
  }
  Delete(idx: number) {
    this.logService.AddLog(true, this.list[idx], 'Delete');
    this.stdService.DeleteStudent(idx);
    this.student.Id = 0;
  }
  updateFlag = false;
  reset() {
    this.student = { Id: 0, Name: '', Address: '' };
  }
  updateIndex =0;
  Edit(idx: number) {
    this.updateIndex = idx;
    this.student= Object.assign({},this.list[idx]);
    this.updateFlag = true;
  }
  update()
  {
    this.stdService.UpdateStudent(this.updateIndex,this.student);
    this.logService.AddLog(true, this.student, 'Update');
    this.reset();
    this.updateIndex = 0;
  }
  ngOnInit(): void {
  }

}
