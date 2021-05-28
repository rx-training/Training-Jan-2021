import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-assignment',
  templateUrl: './day18-assignment.component.html',
  styleUrls: ['./day18-assignment.component.css']
})
export class Day18AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/day18/assignment.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
