import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FieldControlService } from './field-control.service';
import { FieldBase } from './models/field-base';
import { FieldDate } from './models/field-date';
import { FieldText } from './models/field-text';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor() { }

  getFields() {
    const fields: FieldBase<string>[] = [
      new FieldText({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1,
        type:'text',
        groupKey:'studentName',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'middleName',
        label: 'Middle name',
        value: '',
        required: true,
        order: 2,
        type:'text',
        groupKey:'studentName',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 3,
        type:'text',
        groupKey:'studentName',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldDate({
        key: 'dob',
        label: 'Date of birth',
        value: '',
        required: true,
        order: 4,
        type:'date',
        validations: [Validators.required, FieldControlService.futureDateValidator()]
      }),
      new FieldText({
        key: 'placeOfBirth',
        label: 'Place of birth',
        value: '',
        required: true,
        order: 5,
        type:'text',
        validations: [Validators.required]
      }),
      new FieldText({
        key: 'firstLanguage',
        label: 'First language',
        value: '',
        required: true,
        order: 6,
        type:'text',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'email',
        label: 'Email',
        value: '',
        required: true,
        order: 7,
        type:'text',
        groupKey: 'father',
        validations: [Validators.required, Validators.email]
      }),
      new FieldText({
        key: 'education',
        label: 'Education',
        value: '',
        required: true,
        order: 8,
        type:'text',
        groupKey: 'father',
        validations: [Validators.required]
      }),
      new FieldText({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 9,
        type:'text',
        groupKey: 'father.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'middleName',
        label: 'Middle name',
        value: '',
        required: true,
        order: 10,
        type:'text',
        groupKey: 'father.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 11,
        type:'text',
        groupKey: 'father.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      
      new FieldText({
        key: 'email',
        label: 'Email',
        value: '',
        required: true,
        order: 12,
        type:'text',
        groupKey:'mother',
        validations: [Validators.required, Validators.email]
      }),
      new FieldText({
        key: 'education',
        label: 'Education',
        value: '',
        required: true,
        order: 13,
        type:'text',
        groupKey:'mother',
        validations: [Validators.required]
      }),
      new FieldText({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 14,
        type:'text',
        groupKey:'mother.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'middleName',
        label: 'Middle name',
        value: '',
        required: true,
        order: 15,
        type:'text',
        groupKey:'mother.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
      new FieldText({
        key: 'lastName',
        label: 'Last name',
        value: '',
        required: true,
        order: 16,
        type:'text',
        groupKey:'mother.name',
        validations: [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]
      }),
    ]

    return of(fields.sort((a, b) => a.order - b.order));
  }
}
