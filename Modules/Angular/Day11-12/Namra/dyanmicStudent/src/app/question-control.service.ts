import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor() { }

    toFormGroup(questions: QuestionBase<string>[]) {
        const group: any = {};

        questions.forEach(question => {

            
            if(question.groupKey!= '' || question.groupKey != null)
            {
                if(question.key == "firstName" || question.key == "middleName" || question.key == "lastName")
                {
                    group[question.key] = question.required ?
                    new FormControl(question.value || '', [Validators.required,Validators.pattern("^[a-zA-Z]*$")])
                    : new FormControl(question.value || '');
                }
                else
                {
                    group[question.key] = question.required ?
                    new FormControl(question.value || '', Validators.required)
                    : new FormControl(question.value || '');
                }
            }
            else
            {
                group[question.key] = question.required ?
                new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
            }

            
            
        });
        return new FormGroup(group);
    }
}