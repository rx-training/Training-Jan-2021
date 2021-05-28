import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15-assignment',
  templateUrl: './day15-assignment.component.html',
  styleUrls: ['./day15-assignment.component.css']
})
export class Day15AssignmentComponent implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    this.loadScript('/assets/js/day15/assignment.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }


}
