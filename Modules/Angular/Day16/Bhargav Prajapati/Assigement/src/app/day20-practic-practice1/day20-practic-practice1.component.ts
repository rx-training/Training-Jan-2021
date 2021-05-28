import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20-practic-practice1',
  templateUrl: './day20-practic-practice1.component.html',
  styleUrls: ['./day20-practic-practice1.component.css']
})
export class Day20PracticPractice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day20Practice1.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
