import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../models/Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  providers: [StudentService]
})
export class StudentFormComponent implements OnInit, OnChanges {

  constructor(private fb: FormBuilder,private studentService:StudentService) { }

  @Input() student:Student = null;
  @Input() index:number;

  @Output() formEmitter: EventEmitter<any> = new EventEmitter();

  studentForm = this.fb.group({
    id: [(this.student == null)? null : this.student.id, Validators.required],
    name: [(this.student == null)? null : this.student.name, Validators.required],
    address: [(this.student == null)? null : this.student.address, Validators.required],
    standard: [(this.student == null)? null : this.student.standard, Validators.required]
  });

  studentEntry:Student;

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges) {
    if(changes.index != null) {
      this.studentForm = this.fb.group({
        id: [(this.student == null)? null : this.student.id, Validators.required],
        name: [(this.student == null)? null : this.student.name, Validators.required],
        address: [(this.student == null)? null : this.student.address, Validators.required],
        standard: [(this.student == null)? null : this.student.standard, Validators.required]
      });
    }
    
  }

  submitForm() {

    this.studentEntry = <Student>this.studentForm.value;

    

    if(this.index == -1) {
      var list = this.studentService.addStudent(this.studentEntry);
      this.studentForm.reset();
    }

    else
      var list = this.studentService.updateStudent(this.index, this.studentEntry);

    this.formEmitter.emit(list);
  }

}
