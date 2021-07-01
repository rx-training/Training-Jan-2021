import { Component, OnInit ,Input,Output} from '@angular/core';
import { Data } from '@angular/router';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})
export class StudentComponentComponent implements OnInit {
  // @Input() data : string ="";
  Name="";
  Number="";
  studlist:Array<any>=[];
  @Output() addStudent1 = new EventEmitter();
  
  constructor() { 
    
  }
  addStudent()
  {
    this.studlist.push({Name : this.Name,Number : this.Number});
    this.addStudent1.emit(this.studlist);
  }
  ngOnInit(): void {
    // console.log(this.data);
  }

}
