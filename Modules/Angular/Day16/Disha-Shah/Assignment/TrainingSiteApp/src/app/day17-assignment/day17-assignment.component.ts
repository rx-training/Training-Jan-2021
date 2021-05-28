import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day17-assignment',
  templateUrl: './day17-assignment.component.html',
  styleUrls: ['./day17-assignment.component.css']
})
export class Day17AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day17/assignment.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }

}
