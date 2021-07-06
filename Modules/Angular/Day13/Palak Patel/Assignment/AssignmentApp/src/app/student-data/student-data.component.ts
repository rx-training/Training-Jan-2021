import { Component, OnInit, Input } from '@angular/core';
import { IStudent } from 'src/Models/interfaces';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  @Input() data :IStudent[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
