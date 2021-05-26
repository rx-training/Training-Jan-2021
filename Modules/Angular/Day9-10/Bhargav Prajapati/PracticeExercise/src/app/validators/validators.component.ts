import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  EmployeeDetails:FormGroup;
  forbbidanusernname=['ABCDEF','GHIJKL']
  ngOnInit(): void {
    this.EmployeeDetails=this.fb.group({
      UserName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      Email:['',[Validators.required,Validators.email]],
      Skills:this.fb.array([
        this.GetSkill()

      ])
    })
   

  }


  GetSkill():FormGroup
  {
    return this.fb.group({
      SkillName:['',Validators.required],
      Exprience:['',Validators.required],
      Profiancy:['',Validators.required]
    })
  }
  Submitdata():void
  {
    console.log(this.EmployeeDetails.value);
    this.EmployeeDetails.reset()
  }
  AddSkills()
  {
    (<FormArray>this.EmployeeDetails.get('Skills')).push(this.GetSkill())
  }

 
 InvalidNames(control:FormControl):{[s:string]:boolean }
 {
    if(this.forbbidanusernname.indexOf(control.value)!==-1)
    {
      return {'NamIsforbidden':true};
    }
    return null
 }
}