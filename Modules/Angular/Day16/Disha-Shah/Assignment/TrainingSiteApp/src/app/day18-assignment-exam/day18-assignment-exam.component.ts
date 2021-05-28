import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-assignment-exam',
  templateUrl: './day18-assignment-exam.component.html',
  styleUrls: ['./day18-assignment-exam.component.css']
})
export class Day18AssignmentExamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day18/exam.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
