import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-practice5',
  templateUrl: './day16-practice5.component.html',
  styleUrls: ['./day16-practice5.component.css']
})
export class Day16Practice5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day16Practice5.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }
}