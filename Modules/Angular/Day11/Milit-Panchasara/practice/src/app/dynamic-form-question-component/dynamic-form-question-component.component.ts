import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question-component.component.html',
  styleUrls: ['./dynamic-form-question-component.component.css']
})
export class DynamicFormQuestionComponentComponent {

  @Input() question: QuestionBase<string>;
  @Input() form: FormGroup;

  constructor() { }

  get isValid() { return this.form.controls[this.question.key].valid; }

}
