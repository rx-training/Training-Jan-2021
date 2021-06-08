import { Component,OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/Forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myForm') myForm :any = NgForm;
  title = 'practice1';
  genders = [
    {id:'1',value:'Male'},
    {id:'2',value:'Female'}
  ];
  defaultGender='Female';
  submitted = false;
  formData = 
  {
    username:'a',
    email : 'b',
    course : 'c',
    gender : 'd'
  }
    
  onSubmit(form :NgForm)
  {
    console.log(this.myForm);
    this.submitted=true;
    this.formData.username = this.myForm.value.userDetail.username;
    this.formData.email = this.myForm.value.userDetail.email;
    this.formData.course = this.myForm.value.course;
    this.formData.gender = this.myForm.value.gender;
    this.myForm.reset();
  }

}

