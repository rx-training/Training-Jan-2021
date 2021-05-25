import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-string',
  templateUrl: './day16-string.component.html',
  styleUrls: ['./day16-string.component.css']
})
export class Day16StringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day16/string.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }

}
