import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  Employee : FormGroup;

  constructor(private fb : FormBuilder) {
    this.Employee = this.fb.group({
      ID : ['', Validators.required],
      Name : ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      Salary : ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{5}')])],
      Address : this.fb.group({
        City : ['', Validators.required],
        State : ['', Validators.required]
      }),
      WorkedAtCompanies : this.fb.array([
        this.fb.group({
          CompanyName : ['', Validators.required],
          WorkedTillDate : ['', Validators.required]
        }),
        this.fb.group({
          CompanyName : ['', Validators.required],
          WorkedTillDate : ['', Validators.required]
        })
      ])
    })
   }

  ngOnInit(): void {
  }

  get WorkedAtCompanies(){
    return this.Employee.get("WorkedAtCompanies") as FormArray;
  }

  addCompany(){
    this.WorkedAtCompanies.push(this.fb.group({
      CompanyName : ['', Validators.required],
      WorkedTillDate : ['', Validators.required]
    }));
  }

  removeCompany(i){
    this.WorkedAtCompanies.removeAt(i);
  }
  
}
