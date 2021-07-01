import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from '@angular/forms';
@Component({
  selector: 'app-form-assingment',
  templateUrl: './form-assingment.component.html',
  styleUrls: ['./form-assingment.component.css']
})
export class FormAssingmentComponent implements OnInit {

  constructor() { }
  Studentform:FormGroup;
  ngOnInit(): void {
    this.Studentform = new FormGroup(
      {
        name:new FormGroup({
          fname:new FormControl(),
          mname:new FormControl(),
          lname:new FormControl()
            }),
        dob: new FormControl(),
        POB : new FormControl(),
        Flang: new FormControl(),
        address:new FormGroup({
          city:new FormControl(),
          state:new FormControl(),
          cpin:new FormControl()
        }),
        fathername:new FormGroup({
          Fname:new FormControl(),
          Fmname:new FormControl(),
          Flname:new FormControl(),
          Femil:new FormControl(),
          Fedq:new FormControl(),
          Fprof:new FormControl(),
          Fdesi:new FormControl(),
          Fphone:new FormControl()
        }),
        mothername:new FormGroup({
          mfname:new FormControl(),
          mname:new FormControl(),
          lname:new FormControl(),
          memail:new FormControl(),
          medq:new FormControl(),
          Mprof:new FormControl(),
          mdes:new FormControl(),
          mPhone:new FormControl()
        }),        
        EmergencyContactList: new FormArray([
          new FormGroup( {
            Relation : new FormControl(),
            Number : new FormControl()
          })
        ]),
        ReferenceDetails: new FormArray([
          new FormGroup( {
            ReferenceThrough : new FormControl(),
            AddresswithTelNo : new FormControl()
          })
        ]),
      }
    )
  }
  get getEmergencyContactList(){
    return this.getEmergencyContactList.get('Studentform') as FormArray;
   }
   get getReferenceDetails(){
    return this.getReferenceDetails.get('Studentform') as FormArray;
   }

}
