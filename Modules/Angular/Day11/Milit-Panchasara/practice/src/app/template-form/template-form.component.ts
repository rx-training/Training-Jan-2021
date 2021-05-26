import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  // @ViewChild('f') signInForm: NgForm | null;
  // password = '';
  // name = '';
  data = '';
  constructor() { 
    // this.signInForm=null;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, addressData:NgModelGroup) {
    console.log(form);
    if(form.valid)
      this.data = `Name: ${form.value.username} & Password: ${form.value.pass}`;
    console.log(addressData);

    form.resetForm();
    form.form.patchValue({
      username:"example@example.com"
    })
    
  }

  // onSubmit() {
  //   console.log(this.signInForm);
  //   if(this.signInForm != null)
  //     this.data = `Name: ${this.signInForm.value.username} & Password: ${this.signInForm.value.pass}`;
  // }
}
