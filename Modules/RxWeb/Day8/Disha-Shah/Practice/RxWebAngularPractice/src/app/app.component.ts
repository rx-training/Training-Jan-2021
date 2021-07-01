import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {RxwebValidators, RxFormBuilder} from '@rxweb/reactive-form-validators';
import {User1} from './user1.module';
import {User2} from './user2.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RxWebAngularPractice';

  userFormGroup: FormGroup;
  student1FormGroup: FormGroup;
  user: User2;

  constructor(private formBuilder: FormBuilder, private fb: RxFormBuilder){}

  ngOnInit(): void{
    this.userFormGroup = this.formBuilder.group({
      userName: ['', RxwebValidators.required()],
      password: '',
      confirmPassword: ['', RxwebValidators.compare({fieldName: 'password'})]
    })

    this.student1FormGroup = this.fb.formGroup(User1);

    this.user = new User2();
  }
}
