import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators,AbstractControl,FormArray} from '@angular/Forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  City : AbstractControl;
  State : AbstractControl;
  Pin : AbstractControl;
  registrationForm : FormGroup;
  addalternateEmails()
  {
    this.alternateEmails1.push(this.fb.control(''));
  }
  constructor(private fb : FormBuilder) { 
  this.registrationForm = this.fb.group({
    username : ['',Validators.compose([Validators.required,Validators.minLength(3)])],
    password : ['',Validators.required],
    ConfirmPassword : ['',Validators.required],
    email : ['',Validators.compose([Validators.required,Validators.email])],
    address : this.fb.group({
      city : ['',Validators.required],
      state : ['',Validators.required],
      pin : ['',Validators.required]
    }
    ),
    alternateEmails: this.fb.array([])
  }
  );
 this.City = this.getAddress.controls['city'];
 this.State = this.getAddress.controls['state'];
 this.Pin = this.getAddress.controls['pin'];
}

  

  // registrationForm = new FormBuilder({
  //   username : new FormControl(''),
  //   password : new FormControl(''),
  //   ConfirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     pin : new FormControl('')
  //   })
  // });
  get getAddress()
  {
    return this.registrationForm.get('address') as FormGroup;
  }
  get alternateEmails1()
  {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }
  onSubmit()
  {
    console.log(this.registrationForm.value);
  }


  ngOnInit(): void {
  }
  

}
