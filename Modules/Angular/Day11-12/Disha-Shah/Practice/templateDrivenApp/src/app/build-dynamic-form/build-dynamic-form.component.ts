import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from '../models/question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-build-dynamic-form',
  templateUrl: './build-dynamic-form.component.html',
  styleUrls: ['./build-dynamic-form.component.css'],
  providers:  [QuestionService]
})
export class BuildDynamicFormComponent implements OnInit {

  questions$: Observable<QuestionBase<string>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }

  ngOnInit(): void {
  }

}
