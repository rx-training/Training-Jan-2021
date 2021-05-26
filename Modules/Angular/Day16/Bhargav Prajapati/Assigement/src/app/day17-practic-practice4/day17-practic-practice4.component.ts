import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day17-practic-practice4',
  templateUrl: './day17-practic-practice4.component.html',
  styleUrls: ['./day17-practic-practice4.component.css']
})
export class Day17PracticPractice4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day17Practice4.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
