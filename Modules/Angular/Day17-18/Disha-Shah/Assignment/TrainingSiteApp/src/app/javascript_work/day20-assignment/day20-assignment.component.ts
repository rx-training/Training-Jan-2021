import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20-assignment',
  templateUrl: './day20-assignment.component.html',
  styleUrls: ['./day20-assignment.component.css']
})
export class Day20AssignmentComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    this.loadScript('../assets/js/day20/assignment.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
