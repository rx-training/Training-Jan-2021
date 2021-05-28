import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentBase } from '../models/student-base';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-dynamic-form',
  templateUrl: './student-dynamic-form.component.html',
  styleUrls: ['./student-dynamic-form.component.css'],
  providers:  [StudentService]
})
export class StudentDynamicFormComponent implements OnInit {

  students$: Observable<StudentBase<string>[]>;

  constructor(service: StudentService) {
    this.students$ = service.getStudents();
  }

  ngOnInit(): void {
  }

}
