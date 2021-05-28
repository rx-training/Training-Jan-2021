import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldControlService } from '../field-control.service';
import { FieldBase } from '../models/field-base';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  providers: [ FieldControlService]
})
export class StudentFormComponent implements OnInit {

  @Input() fields : FieldBase<string>[] = [];
  form:FormGroup;
  payLoad = '';

  constructor(private service: FieldControlService) { }

  ngOnInit(): void {
    this.form = this.service.toFormGroup(this.fields);
    console.log(this.form);
    
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    console.log(this.payLoad);
    

  }

}
