import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-practice',
  templateUrl: './day16-practice.component.html',
  styleUrls: ['./day16-practice.component.css']
})
export class Day16PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day16/practice.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
