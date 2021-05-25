import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-date',
  templateUrl: './day16-date.component.html',
  styleUrls: ['./day16-date.component.css']
})
export class Day16DateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/day16/date.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
