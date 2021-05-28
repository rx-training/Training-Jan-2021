import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18',
  templateUrl: './day18.component.html',
  styleUrls: ['./day18.component.css']
})
export class Day18Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d18.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}