import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18assignment',
  templateUrl: './day18assignment.component.html',
  styleUrls: ['./day18assignment.component.css']
})
export class Day18assignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/assignment18.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
