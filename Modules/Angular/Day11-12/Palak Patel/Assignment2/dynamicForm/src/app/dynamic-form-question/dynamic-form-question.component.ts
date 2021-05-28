import { Component, Input, OnInit } from '@angular/core';
import {QuestionBase} from './../question-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponen implements OnInit {

  @Input() question! : QuestionBase<string>;
  @Input() form! : FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }
  constructor() { }

  ngOnInit(): void {
  }

}
