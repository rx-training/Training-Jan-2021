import { Component, OnInit } from '@angular/core';
declare var startExam : any;
@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  start()
  {
    startExam();
  }
}
