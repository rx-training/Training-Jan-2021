import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-nestedforms',
  templateUrl: './reactive-nestedforms.component.html',
  styleUrls: ['./reactive-nestedforms.component.css']
})
export class ReactiveNestedformsComponent implements OnInit {

  constructor() { }

  CreateEmployee:FormGroup;
  ngOnInit(): void {
    this.CreateEmployee=new FormGroup({
      FullName:new FormControl('',Validators.required),
      Email:new FormControl(),
      Skill:new FormArray([
        this.formaddgroup()
      ])
    });
  }
  onSubmit():void
  {
    console.log(this.CreateEmployee.value);
    
    
  }

  formaddgroup():FormGroup
  {
    return new FormGroup({
      SkillName:new FormControl,
      Exprience:new FormControl,
      Proficiency:new FormControl
      });
  }

  AddSkill():void
  {
   (<FormArray>this.CreateEmployee.get('Skill')).push(this.formaddgroup())
  }

  AddDefaultData():void
  {
    this.CreateEmployee.patchValue({
      FullName:"Bhargav Prajapati",
      Email:"bhargavprajapati1094740@gmail.com",
      // Skill:{
      //   SkillName:".Net",
      //   Exprience:5,
      //   Proficiency:"bignner"
      //}


    }) 
  }

}
