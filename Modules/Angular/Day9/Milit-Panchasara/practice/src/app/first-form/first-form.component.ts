import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.css']
})
export class FirstFormComponent implements OnInit {

  genders=[ "male", "female"];
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl(this.genders[0]),
      address: new FormGroup({
        street: new FormControl(null),
        city: new FormControl(null),
        country: new FormControl('India')
      }),
      family: new FormArray([
        new FormGroup({
          name: new FormControl(null),
          relation: new FormControl(null),
          age: new FormControl(null)
        }),
        new FormGroup({
          name: new FormControl(null),
          relation: new FormControl(null),
          age: new FormControl(null)
        })
      ])
    });
   }

  ngOnInit(): void {
    this.signupForm
  }

  getFamily() {
    return (<FormArray>this.signupForm.get("family"));
  }

  addMember() {
    (<FormArray>this.signupForm.get("family")).push( 
      new FormGroup({
        name: new FormControl(null),
        relation: new FormControl(null),
        age: new FormControl(null)
      })
    );
  }

  onSubmit() {
    console.log(this.signupForm);
    if(!this.signupForm.valid) {
      alert("invalid form data!")
    }
  }

  updateAddress() {
    this.signupForm.patchValue({
      address:{
        street:"Gondal Road",
        city:"Rajkot"
      }
    })
  }

}
