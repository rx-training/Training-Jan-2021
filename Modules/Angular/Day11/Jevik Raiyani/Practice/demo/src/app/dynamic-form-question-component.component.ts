import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './Question-Base';

@Component({
  selector: 'app-dynamic-form-question-component',
  templateUrl: './dynamic-form-question-component.component.html'
})
export class DynamicFormQuestionComponentComponent  {

  @Input() question!: QuestionBase<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }


}
