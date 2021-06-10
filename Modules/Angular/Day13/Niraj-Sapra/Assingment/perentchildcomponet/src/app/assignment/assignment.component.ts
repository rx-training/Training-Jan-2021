import { Component, Input, EventEmitter, Output, OnChanges, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray, Validators, FormControl, AbstractControl, EmailValidator} from '@angular/forms';
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit, OnChanges {
  
  Studentform:FormGroup;
  constructor(private formbuilder:FormBuilder){  this.Studentform = this.formbuilder.group(
    {
      name: this.formbuilder.group({
        fname:['',Validators.required],
        mname:['',Validators.required],
        lname:['',Validators.required]
          }),
          dob:['',Validators.required],
          POB : ['',Validators.required],
          Flang:['',Validators.required],
          address:this.formbuilder.group({
            city:['',Validators.required],
            state:['',Validators.required],
            cpin:['',Validators.required]
          }),
          fathername: this.formbuilder.group({
            Ffname:['',Validators.required],
            Fmname:['',Validators.required],
            Flname:['',Validators.required],
            Femil:['',Validators.email],
            Fedq:['',Validators.required],
            Fprof:['',Validators.required],
            Fdesi:['',Validators.required],
            Fphone:['',Validators.required]
          }),
          mothername: this.formbuilder.group({
            mfname:['',Validators.required],
            mmname:['',Validators.required],
            mlname:['',Validators.required],
            memail:['',Validators.email],
            medq:['',Validators.required],
            Mprof:['',Validators.required],
            mdes:['',Validators.required],
            mPhone:['',Validators.required]
          }),        
          EmergencyContactList: this.formbuilder.array([
            this.formbuilder.group( {
              Relation : ['',Validators.required],
             Number : ['',Validators.required]
            })
          ]),
          ReferenceDetails: this.formbuilder.array([
            this.formbuilder.group( {
              ReferenceThrough :['',Validators.required],
              AddresswithTelNo :['',Validators.required]
            })
          ]),
        }
        )
  }
  @Input() firstname: string;
  @Input() midumname: string;
  @Input() name:string;
  @Input() lastname: string;
  @Input() dateofbirth: string;
  @Input() pobs: number;
  @Input() finallangvage: string;
  @Input() citys: string;
  @Input() states: string;
  @Input() contorypin: number;
  @Input() fatherfirstname: string;
  @Input() fathermidumname: string;
  @Input() fatherlastname: string;
  @Input() fatheremail: string;
  @Input() fatherprofetion: string;
  @Input() fatherdistrition: string;
  @Input() fatherphoneno: number;
  @Input() motherfirstname: string;
  @Input() mothermidumname: string;
  @Input() motherlastname: string;
  @Input() motheremail: string;
  @Input() motherprofetion: string;
  @Input() motherdistrition: string;
  @Input() motherphoneno: number;
  @Input() studentid: number;
  @Output() assingmentValueChange = new EventEmitter();
  color = '';
  assignmentValueChanged() {
    console.log(this.firstname);  
    this.assingmentValueChange.emit({id: this.studentid, name: this.firstname+' '+this.lastname});
      this.firstname = 'name';
      this.lastname = 'lastname';
  }
  ngOnChanges() {
      if ((this.firstname+this.lastname).length > 10) {
          this.color = 'green';
      } else {
          this.color = 'orange';
      }
  }
  ngOnInit(): void {
  }
  get EmergencyContactList():any{
    return this.EmergencyContactList.get('EmergencyContactList') as FormArray;
   }
   get ReferenceDetails():any{
    return this.ReferenceDetails.get('ReferenceDetails') as FormArray;
   } 
  get fname(){
    return this.Studentform.controls.name.get('fname');    
  }
  get mname(){
    return this.Studentform.get('name.mname');    
  }
  get lname(){
    return this.Studentform.get('name.mname');    
  }
  get dob(){
    return this.Studentform.get('dob');    
  }
  get POB(){
    return this.Studentform.get('POB');    
  }
  get Flang(){
    return this.Studentform.get('Flang');    
  }
  get city(){
    return this.Studentform.get('address.city');    
  }
  get state(){
    return this.Studentform.get('address.state');    
  }
  get cpin(){
    return this.Studentform.get('address.cpin');    
  }
  get Ffname(){
    return this.Studentform.get('fathername.Ffname');    
  }
  get Fmname(){
    return this.Studentform.get('fathername.Fmname');    
  }
  get Flname(){
    return this.Studentform.get('fathername.Flname');    
  }
  get Femil(){
    return this.Studentform.get('fathername.Femil');    
  }
  get Fedq(){
    return this.Studentform.get('fathername.Fedq');    
  }
  get Fprof(){
    return this.Studentform.get('fathername.Fprof');    
  }
  get Fdesi(){
    return this.Studentform.get('fathername.Fdesi');    
  }
  get Fphone(){
    return this.Studentform.get('fathername.Fphone');    
  }
  get mfname(){
    return this.Studentform.get('mothername.mfname');    
  }
  get mmname(){
    return this.Studentform.get('mothername.mmname');    
  }
  get mlname(){
    return this.Studentform.get('mothername.mlname');    
  }
  get memail(){
    return this.Studentform.get('mothername.memail');    
  }
  get medq(){
    return this.Studentform.get('mothername.medq');    
  }
  get Mprof(){
    return this.Studentform.get('mothername.Mprof');    
  }
  get mdes(){
    return this.Studentform.get('mothername.mdes');    
  }
  get mPhone(){
    return this.Studentform.get('mothername.mPhone');    
  }
  onsubmit(){
    console.log(this.Studentform);
  }
  
}
