import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-array',
  templateUrl: './day16-array.component.html',
  styleUrls: ['./day16-array.component.css']
})
export class Day16ArrayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/day16/array.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }


}
