import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15a',
  templateUrl: './day15a.component.html',
  styleUrls: ['./day15a.component.css']
})
export class Day15aComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/day15/assignment.js')
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
