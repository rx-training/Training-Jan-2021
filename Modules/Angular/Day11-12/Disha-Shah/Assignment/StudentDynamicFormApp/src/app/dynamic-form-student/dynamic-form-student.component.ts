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
    if(this.getKeys(this.student).length==2)
    { 
      console.log(this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1]));
      console.log(this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1]).valid || this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1]).untouched);
      return this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1]).valid || this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1]).untouched; 
    }
    else if(this.getKeys(this.student).length==3)
    { 
      console.log(this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1] + '.' + this.getKeys(this.student)[2]));
      console.log(this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1] + '.' + this.getKeys(this.student)[2]).valid || this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1] + '.' + this.getKeys(this.student)[2]).untouched);
      return this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1] + '.' + this.getKeys(this.student)[2]).valid || this.form.get(this.getKeys(this.student)[0] + '.' + this.getKeys(this.student)[1] + '.' + this.getKeys(this.student)[2]).untouched; 
    }
    else{
      return this.form.controls[this.student.key].valid || this.form.controls[this.student.key].untouched; 
    }
  }

  getKeys(student: StudentBase<string>): string[]{
    let keys = student.key.split('.');
    return keys;
  }

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.student);
    console.log(this.form);
    console.log(this.isValid);
  }

}
