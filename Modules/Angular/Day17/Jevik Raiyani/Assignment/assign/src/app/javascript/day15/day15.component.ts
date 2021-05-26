import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15',
  templateUrl: './day15.component.html',
  styleUrls: ['./day15.component.css']
})
export class Day15Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d15.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
