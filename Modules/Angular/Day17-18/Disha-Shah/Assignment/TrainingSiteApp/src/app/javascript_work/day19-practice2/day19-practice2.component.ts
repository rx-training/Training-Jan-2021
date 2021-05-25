import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19-practice2',
  templateUrl: './day19-practice2.component.html',
  styleUrls: ['./day19-practice2.component.css']
})
export class Day19Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('../assets/js/day19/p2.js');
  }

  loadScript(url: any){
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    body.appendChild(script);
  }
}
