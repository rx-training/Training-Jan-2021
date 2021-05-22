import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  // styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent {

  @Input() question! : QuestionBase<string>;
  @Input() form! : FormGroup;

  get isValid(){
    // if(this.form.controls[this.question.key].valid){
    //   return this.form.controls[this.question.key].valid;
    // }
    // if(this.form.controls[this.question.key].untouched){
    //   return this.form.controls[this.question.key].untouched;
    // }
    return this.form.controls[this.question.key].valid; //|| this.form.controls[this.question.key].untouched;
  }

}
