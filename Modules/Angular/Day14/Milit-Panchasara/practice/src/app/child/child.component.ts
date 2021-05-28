import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() student: StudentService;


  constructor() { }

  ngOnInit(): void {
    console.log(this.student);
  }

}
