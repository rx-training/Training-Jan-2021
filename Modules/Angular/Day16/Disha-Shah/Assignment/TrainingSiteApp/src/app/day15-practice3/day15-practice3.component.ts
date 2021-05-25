import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15-practice3',
  templateUrl: './day15-practice3.component.html',
  styleUrls: ['./day15-practice3.component.css']
})
export class Day15Practice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day15/p3.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
    
  }

}
