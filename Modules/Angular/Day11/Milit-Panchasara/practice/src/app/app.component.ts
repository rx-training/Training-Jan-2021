import { Component } from '@angular/core';
import { QuestionControlServiceService } from './question-control-service.service';
import { QuestionBase } from './question-base';
import { Observable } from 'rxjs';
import { QuestionService } from './question-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [QuestionService] 
})
export class AppComponent {
  title = 'practice';
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
