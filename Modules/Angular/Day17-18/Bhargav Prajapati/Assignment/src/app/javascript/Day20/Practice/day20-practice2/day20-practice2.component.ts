import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20-practice2',
  templateUrl: './day20-practice2.component.html',
  styleUrls: ['./day20-practice2.component.css']
})
export class Day20Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day20Practice2.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
