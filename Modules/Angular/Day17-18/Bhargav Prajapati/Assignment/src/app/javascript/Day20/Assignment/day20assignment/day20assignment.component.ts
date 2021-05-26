import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day20assignment',
  templateUrl: './day20assignment.component.html',
  styleUrls: ['./day20assignment.component.css']
})
export class Day20assignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/assignment20.js');
   
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
