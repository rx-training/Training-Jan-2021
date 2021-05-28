import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-assignment',
  templateUrl: './day16-assignment.component.html',
  styleUrls: ['./day16-assignment.component.css']
})
export class Day16AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day16/assignment.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
