import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19-practic-practice2',
  templateUrl: './day19-practic-practice2.component.html',
  styleUrls: ['./day19-practic-practice2.component.css']
})
export class Day19PracticPractice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day19Practice2.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
