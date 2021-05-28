import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from 'src/lib/question-base';
import { QuestionService } from 'src/lib/question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ QuestionService ]
})
export class AppComponent {
  title = 'AssignmentDay11';

  questions$ : Observable<QuestionBase<any>[]>;

  constructor(service : QuestionService){
    this.questions$ = service.getQuestions();
  }

}
