import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRegister } from '../../models/IRegister';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerResponse: any;

  registerForm;

  constructor(private fb: FormBuilder, private service: RegisterService) { 
    this.registerForm = this.fb.group({
      userName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      email:  ['', Validators.compose([Validators.required, Validators.email])],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[#$^+=!*()@%&]).{9,10}$')])]
    });
  }

  ngOnInit(): void {
  }

  addUser(newUser: IRegister): void {
    this.service.addUser(newUser)
    .subscribe();
  }

  registerSubmit(){
    var newUser: IRegister = {
      username : this.registerForm.value.userName,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phoneNumber,
      password: this.registerForm.value.password
    }

    console.log(newUser);
    this.addUser(newUser);

    this.registerForm.reset();
  }

}
