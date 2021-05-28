import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { QuestionBase } from './Question-Base';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form-component [questions]="questions$ | async"></app-dynamic-form-component>
    </div>
  `,
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService]
})
export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
