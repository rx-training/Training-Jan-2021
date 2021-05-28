import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { student } from './student';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})

export class ReactiveformsComponent implements OnInit {

  constructor() { }

  CreateEmployee:FormGroup;
  ngOnInit(): void {
    this.CreateEmployee=new FormGroup({
      FullName:new FormControl(),
      Email:new FormControl(),
      
    });
  }

  stddata:student[]=[];
  
  onSubmit():void
  {
    console.log(this.CreateEmployee.value);
    
    
  }
    

}
