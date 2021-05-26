import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day17',
  templateUrl: './day17.component.html',
  styleUrls: ['./day17.component.css']
})
export class Day17Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d17.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}