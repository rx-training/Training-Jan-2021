import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentBase } from '../models/student-base';

@Component({
  selector: 'app-dynamic-form-student',
  templateUrl: './dynamic-form-student.component.html',
  styleUrls: ['./dynamic-form-student.component.css']
})
export class DynamicFormStudentComponent implements OnInit {

  @Input() student: StudentBase<string>;
  @Input() form: FormGroup;
  get isValid() { 
    console.log('split result:' + this.student.key.split('.'));
    let keys = this.student.key.split('.');
    if(keys[0]=='name')
    {
      console.log(this.getStudentName);
      console.log(this.getStudentName.controls);
      console.log(this.getStudentName.controls[keys[1]]);
      console.log('result: ' + this.getStudentName.controls[keys[1]].valid);
      return this.getStudentName.controls[keys[1]].valid || this.getStudentName.controls[keys[1]].untouched; 
    }
    else{
      return this.form.controls[this.student.key].valid || this.form.controls[this.student.key].untouched; 
    }
  }

  get getStudentName(){
    return this.form.get('name') as FormGroup;
  }

  constructor() { 
  }

  ngOnInit(): void {
    // console.log(this.student);
    // console.log(this.form);
    // console.log(this.getStudentName);
    // console.log(this.getStudentName.controls);
    // console.log(this.isValid);
  }

}
