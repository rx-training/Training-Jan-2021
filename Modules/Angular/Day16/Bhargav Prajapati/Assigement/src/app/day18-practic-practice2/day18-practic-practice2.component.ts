import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-practic-practice2',
  templateUrl: './day18-practic-practice2.component.html',
  styleUrls: ['./day18-practic-practice2.component.css']
})
export class Day18PracticPractice2Component implements OnInit {

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
