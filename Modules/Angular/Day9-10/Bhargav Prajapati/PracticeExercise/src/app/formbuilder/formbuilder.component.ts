import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  CreateEmployee:FormGroup;
  ngOnInit(): void {
    this.CreateEmployee=this.fb.group({
      FullName:['',Validators.required],
      Email:[''],
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
    return this.fb.group({
      SkillName:[''],
      Exprience:[''],
      Proficiency:['']
      });
  }

  AddSkill():void
  {
   (<FormArray>this.CreateEmployee.get('Skill')).push(this.formaddgroup())
  }

  }

