import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-practice3',
  templateUrl: './day18-practice3.component.html',
  styleUrls: ['./day18-practice3.component.css']
})
export class Day18Practice3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day18Practice3.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  } 

}
