import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from './question-base';
import { RadioQuestion } from './question-radio';
import { TextboxQuestion } from './question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){
    const questions : QuestionBase<string>[] = [
        new TextboxQuestion({
            key : 'email',
            label : 'Email',
            type : 'email',
            // required : true,
            order : 2
        }),
        new TextboxQuestion({
            key : 'firstName',
            label : 'First Name',
            value : 'Fiyona',
            // required : true,
            order : 1
        }),
        new RadioQuestion({
            key : 'gender',
            label : 'Gender',
            options : [
                {key : "male", value : "Male"},
                {key : "female", value : "Female"}
            ],
            order : 3
        })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

}
