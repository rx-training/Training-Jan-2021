import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-practice',
  templateUrl: './pipe-practice.component.html',
  styleUrls: ['./pipe-practice.component.css']
})
export class PipePracticeComponent implements OnInit {
  inpString = '';
  number1 = Math.PI;
  todayDate:Date = new Date();
  constructor() { }

  ngOnInit(): void {
    alert('component initialized')
  }

}
