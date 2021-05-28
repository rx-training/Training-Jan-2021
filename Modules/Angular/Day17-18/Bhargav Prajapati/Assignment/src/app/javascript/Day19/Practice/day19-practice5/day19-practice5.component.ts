import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day19-practice5',
  templateUrl: './day19-practice5.component.html',
  styleUrls: ['./day19-practice5.component.css']
})
export class Day19Practice5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day19Practice6.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
