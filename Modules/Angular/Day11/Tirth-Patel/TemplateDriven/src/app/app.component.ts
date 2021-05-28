import { Component } from '@angular/core';
import { QuestionBase } from './dynamic-form-question/question-base';
import { QuestionService } from './dynamic-form-question/question.service'
import { Observable, observable } from 'rxjs'
@Component({
  selector: 'app-root',
  template: `
  <div>
    <h2> Job Application for heroes </h2>
    <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
</div>
`,
  providers: [QuestionService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;
  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
  title = 'TemplateDriven';
}
