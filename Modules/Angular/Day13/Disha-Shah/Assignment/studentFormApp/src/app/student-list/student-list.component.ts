import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() listValue = []; 

  @Input() submit: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
