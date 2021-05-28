import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {QuestionBase} from './Question-Base'
import {QuestionControlService} from './Question-control.service'

@Component({
  selector: 'app-dynamic-form-component',
  templateUrl: './dynamic-form-component.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponentComponent implements OnInit {

  @Input() questions: QuestionBase<string>[] | null = [];
  form!: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions as QuestionBase<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}