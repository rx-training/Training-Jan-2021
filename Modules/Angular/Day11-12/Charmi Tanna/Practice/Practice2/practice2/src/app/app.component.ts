import { Component } from '@angular/core';
import { QuestionService } from './question.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  template: `
  <div>
  <h2>Job Application for Heroes</h2>
  <app-dynamic-form-question-component [questions]="questions$ | async"></app-dynamic-form-question-component>
</div>
`,
providers:  [QuestionService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title(title: any) {
  //   throw new Error('Method not implemented.');
  // }
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
}
}