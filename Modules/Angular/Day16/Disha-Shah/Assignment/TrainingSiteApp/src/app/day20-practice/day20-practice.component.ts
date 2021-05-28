import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20-practice',
  templateUrl: './day20-practice.component.html',
  styleUrls: ['./day20-practice.component.css']
})
export class Day20PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day20/practice.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
