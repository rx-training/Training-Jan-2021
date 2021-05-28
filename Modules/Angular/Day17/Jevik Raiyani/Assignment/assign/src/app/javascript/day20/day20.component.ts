import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20',
  templateUrl: './day20.component.html',
  styleUrls: ['./day20.component.css']
})
export class Day20Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d20.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}