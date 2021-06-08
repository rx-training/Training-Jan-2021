import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
 Registerform : FormGroup;
 Submitted = false;
  constructor(private formBuilder :FormBuilder)
   {
    this.Registerform = this.formBuilder.group({
      FirstName : ['',Validators.required],
      LastName : ['',Validators.required],
      Username : ['',Validators.required],
      Password : ['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
  Submit()
  {
    this.Submitted = true;
    alert("Registered Sucessfully");
    this.Registerform.reset();
  }

}
