import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { TextboxQuestion } from './question-textbox';
import { QuestionBase } from './question-base';
import { of } from 'rxjs';


@Injectable()
export class QuestionService{
    getQuestions(){
        const questions: QuestionBase<string>[] = [

            new DropdownQuestion({
              key: 'firstLanguage',
              label: 'First Language',
              required: true,
              value : 'Hindi',
              options: [
                {key: 'Hindi',  value: 'Hindi'},
                {key: 'Gujarati',  value: 'Gujarati'},
                {key: 'English',   value: 'English'},
                {key: 'Marathi', value: 'Marathi'}
              ],
              order: 5
            }),
      
            new TextboxQuestion({
              key: 'firstName',
              label: 'First name',
              value: 'Bombasto',
              required: true,
              groupKey : 'StudentName',
              order: 1
            }),
      
            
            new TextboxQuestion({
              key: 'middleName',
              label: 'Middle name',
              value: 'abc',
              required: true,
              groupKey : 'StudentName',
              order: 2
            }),

            new TextboxQuestion({
              key: 'lastName',
              label: 'Last name',
              value: 'Bombasto',
              required: true,
              groupKey : 'StudentName',
              order: 3
            }),

            new TextboxQuestion({
              key: 'emailAddress',
              label: 'Email',
              value : 'abc@abc.com' ,
              type: 'email',
              required: true,
              order: 4
            })
          ];
      
          return of(questions.sort((a, b) => a.order - b.order));
    }
}
