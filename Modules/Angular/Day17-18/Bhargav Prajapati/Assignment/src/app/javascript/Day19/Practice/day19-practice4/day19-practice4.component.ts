import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19-practice4',
  templateUrl: './day19-practice4.component.html',
  styleUrls: ['./day19-practice4.component.css']
})
export class Day19Practice4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day19Practice4.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
