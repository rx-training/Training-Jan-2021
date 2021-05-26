import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  EmployeeId:number=1;
  EmployeeName:string="BHargav"
  Skill:string="Angular And .Net"
  DOB:Date=new Date("1999-12-11" );
  constructor() { }
  name:string="Bhargav";

  ngOnInit(): void {
  }
  getAge():string
  {
    
    return `Your Age Is :-  ${new Date().getFullYear()   - this.DOB.getFullYear()}`;
  }
  ShowAlert():any
  {
    alert("Event Binding  Function is Called");

  }

}
