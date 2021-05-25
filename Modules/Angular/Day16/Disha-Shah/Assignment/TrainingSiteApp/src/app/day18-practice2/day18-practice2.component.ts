import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-practice2',
  templateUrl: './day18-practice2.component.html',
  styleUrls: ['./day18-practice2.component.css']
})
export class Day18Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day18/p2.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }

}
