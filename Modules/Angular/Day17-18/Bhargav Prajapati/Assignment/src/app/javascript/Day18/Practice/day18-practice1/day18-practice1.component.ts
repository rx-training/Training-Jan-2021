import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-practice1',
  templateUrl: './day18-practice1.component.html',
  styleUrls: ['./day18-practice1.component.css']
})
export class Day18Practice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day18Practice2.js');
  }

  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
