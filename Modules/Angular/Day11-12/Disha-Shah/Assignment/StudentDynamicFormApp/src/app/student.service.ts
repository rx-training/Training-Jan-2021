import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StudentBase } from './models/student-base';
import { TextboxStudent } from './models/student-textbox';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  // TODO: get from a remote source of student metadata
  getStudents() {

    const students: StudentBase<string>[] = [

      new TextboxStudent({
        key: 'name.first',
        label: 'First Name',
        required: true,
        type : 'text',
        order: 1
      }),

      new TextboxStudent({
        key: 'name.middle',
        label: 'Middle Name',
        required: true,
        type: 'text',
        order: 2
      }),

      new TextboxStudent({
        key: 'name.last',
        label: 'Last Name',
        required: true,
        type: 'text',
        order: 3
      }),

      new TextboxStudent({
        key: 'dob',
        label: 'DOB',
        required: true,
        type: 'date',
        order: 4
      }),

      new TextboxStudent({
        key: 'birthPlace',
        label: 'Place of Birth',
        required: true,
        type: 'text',
        order: 5
      }),

      new TextboxStudent({
        key: 'language',
        label: 'First Language',
        required: true,
        type: 'text',
        order: 6
      }),

      new TextboxStudent({
        key: 'address.city',
        label: 'City',
        required: true,
        type: 'text',
        order: 7
      }),

      new TextboxStudent({
        key: 'address.state',
        label: 'State',
        required: true,
        type: 'text',
        order: 8
      }),

      new TextboxStudent({
        key: 'address.country',
        label: 'Country',
        required: true,
        type: 'text',
        order: 9
      }),

      new TextboxStudent({
        key: 'address.pin',
        label: 'Pincode',
        required: true,
        type: 'number',
        order: 10
      }),

      new TextboxStudent({
        key: 'father.name.first',
        label: 'Father Firstname',
        required: true,
        type: 'text',
        order: 11
      }),

      new TextboxStudent({
        key: 'father.name.middle',
        label: 'Father Middlename',
        required: true,
        type: 'text',
        order: 12
      }),

      new TextboxStudent({
        key: 'father.name.last',
        label: 'Father Lastname',
        required: true,
        type: 'text',
        order: 13
      }),

      new TextboxStudent({
        key: 'father.email',
        label: 'Father Email',
        required: true,
        type: 'email',
        order: 14
      }),

      new TextboxStudent({
        key: 'father.qualification',
        label: 'Father Qualification',
        required: true,
        type: 'text',
        order: 15
      }),

      new TextboxStudent({
        key: 'father.profession',
        label: 'Father Profession',
        required: true,
        type: 'text',
        order: 16
      }),

      new TextboxStudent({
        key: 'father.designation',
        label: 'Father Designation',
        type: 'text',
        order: 17
      }),

      new TextboxStudent({
        key: 'father.contact',
        label: 'Father Contact No',
        required: true,
        type: 'number',
        order: 18
      }),

      new TextboxStudent({
        key: 'mother.name.first',
        label: 'Mother Firstname',
        required: true,
        type: 'text',
        order: 19
      }),

      new TextboxStudent({
        key: 'mother.name.middle',
        label: 'Mother Middlename',
        required: true,
        type: 'text',
        order: 20
      }),

      new TextboxStudent({
        key: 'mother.name.last',
        label: 'Mother Lastname',
        required: true,
        type: 'text',
        order: 21
      }),

      new TextboxStudent({
        key: 'mother.email',
        label: 'Mother Email',
        required: true,
        type: 'email',
        order: 22
      }),

      new TextboxStudent({
        key: 'mother.qualification',
        label: 'Mother Qualification',
        required: true,
        type: 'text',
        order: 23
      }),

      new TextboxStudent({
        key: 'mother.profession',
        label: 'Mother Profession',
        type: 'text',
        order: 24
      }),

      new TextboxStudent({
        key: 'mother.designation',
        label: 'Mother Designation',
        type: 'text',
        order: 25
      }),

      new TextboxStudent({
        key: 'mother.contact',
        label: 'Mother Contact No',
        required: true,
        type: 'number',
        order: 26
      })

      
    ];

    return of(students.sort((a, b) => a.order - b.order));
  }
}
