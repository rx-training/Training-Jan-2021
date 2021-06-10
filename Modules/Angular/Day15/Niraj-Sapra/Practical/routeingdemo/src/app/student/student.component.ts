import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  arr:Array<any>=[]
  constructor(private router:Router) {
    this.arr=[{"StudentID":1,"StudentName":"Ritu"},
              {"StudentID":2,"StudentName":"Nill"},
              {"StudentID":3,"StudentName":"niraj"},]
   }
   onSelect(item){
    this.router.navigate(["/student",item.StudentID]);
   }
  ngOnInit(): void {
  }

}
