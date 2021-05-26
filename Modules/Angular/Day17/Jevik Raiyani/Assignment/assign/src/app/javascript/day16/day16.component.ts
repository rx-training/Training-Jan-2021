import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16',
  templateUrl: './day16.component.html',
  styleUrls: ['./day16.component.css']
})
export class Day16Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d16.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}