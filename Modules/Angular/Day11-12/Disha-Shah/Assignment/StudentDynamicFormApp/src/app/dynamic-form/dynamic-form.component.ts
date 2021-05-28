import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentBase } from '../models/student-base';
import { StudentControlService } from '../student-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [ StudentControlService ]
})
export class DynamicFormComponent implements OnInit {

  @Input() students: StudentBase<string>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private scs: StudentControlService) { 
    
   }

  ngOnInit() {
    this.form = this.scs.toFormGroup(this.students);
  }

  onSubmit() {
      this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
