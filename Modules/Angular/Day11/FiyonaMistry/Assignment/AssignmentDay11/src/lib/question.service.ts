import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { QuestionBase } from './question-base';
import { DateQuestion } from './question-date';
import { TextboxQuestion } from './question-textbox';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){
    const questions : QuestionBase<string>[] = [
        new TextboxQuestion({
            key : 'firstName',
            label : 'First Name',
            required : true,
            order : 1
        }),
        new TextboxQuestion({
            key : 'middleName',
            label : 'Middle Name',
            required : true,
            order : 2
        }),
        new TextboxQuestion({
          key : 'lastName',
          label : 'Last Name',
          required : true,
          order : 3
        }),
        new DateQuestion({
          key : 'DOB',
          label : 'Date Of Birth',
          required : true,
          order : 4
        }),
        new TextboxQuestion({
          key : 'birthPlace',
          label : 'Place Of Birth',
          required : true,
          order : 5
        }),
        new TextboxQuestion({
          key : 'languagePreference',
          label : 'Preferred Language',
          required : true,
          order : 6
        }),
        new TextboxQuestion({
          key : 'city',
          label : 'city',
          required : true,
          order : 7
        }),
        new TextboxQuestion({
          key : 'state',
          label : 'State',
          required : true,
          order : 8
        }),
        new TextboxQuestion({
          key : 'country',
          label : 'Country',
          required : true,
          order : 9
        }),
        new TextboxQuestion({
          key : 'pin',
          label : 'Pin',
          required : true,
          order : 10
        }),
        new TextboxQuestion({
          key : 'FfirstName',
          label : 'Father First Name',
          required : true,
          order : 11
        }),
        new TextboxQuestion({
          key : 'FmiddleName',
          label : 'Father Middle Name',
          required : true,
          order : 12
        }),
        new TextboxQuestion({
          key : 'FlastName',
          label : 'Father Last Name',
          required : true,
          order : 13
        }),
        new TextboxQuestion({
          key : 'Femail',
          label : 'Father Email',
          required : true,
          order : 14
        }),
        new TextboxQuestion({
          key : 'FeducationQualification',
          label : 'Father Education Qualification',
          required : true,
          order : 15
        }),
        new TextboxQuestion({
          key : 'Fprofession',
          label : 'Father Profession',
          required : true,
          order : 16
        }),
        new TextboxQuestion({
          key : 'Fdesignation',
          label : 'Father Designation',
          required : true,
          order : 17
        }),
        new TextboxQuestion({
          key : 'Fphone',
          label : 'Father Phone',
          required : true,
          order : 18
        }),
        new TextboxQuestion({
          key : 'MfirstName',
          label : 'Mother First Name',
          required : true,
          order : 11
        }),
        new TextboxQuestion({
          key : 'MmiddleName',
          label : 'Mother Middle Name',
          required : true,
          order : 12
        }),
        new TextboxQuestion({
          key : 'MlastName',
          label : 'Mother Last Name',
          required : true,
          order : 13
        }),
        new TextboxQuestion({
          key : 'Memail',
          label : 'Mother Email',
          required : true,
          order : 14
        }),
        new TextboxQuestion({
          key : 'MeducationQualification',
          label : 'Mother Education Qualification',
          required : true,
          order : 15
        }),
        new TextboxQuestion({
          key : 'Mprofession',
          label : 'Mother Profession',
          required : true,
          order : 16
        }),
        new TextboxQuestion({
          key : 'Mdesignation',
          label : 'Mother Designation',
          required : true,
          order : 17
        }),
        new TextboxQuestion({
          key : 'Mphone',
          label : 'Mother Phone',
          required : true,
          order : 18
        }),
        new TextboxQuestion({
          key : 'relation',
          label : 'Relation',
          required : true,
          order : 19
        }),
        new TextboxQuestion({
          key : 'Contact',
          label : 'Contact',
          required : true,
          order : 20
        }),
        new TextboxQuestion({
          key : 'refThrough',
          label : 'Reference Through',
          required : true,
          order : 21
        }),
        new TextboxQuestion({
          key : 'refAddress',
          label : 'Reference Address',
          required : true,
          order : 22
        }),
        new TextboxQuestion({
          key : 'refPhone',
          label : 'Reference Phone',
          required : true,
          order : 23
        })
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }

}
