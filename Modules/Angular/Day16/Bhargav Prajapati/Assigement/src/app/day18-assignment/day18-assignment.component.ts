import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day18-assignment',
  templateUrl: './day18-assignment.component.html',
  styleUrls: ['./day18-assignment.component.css']
})
export class Day18AssignmentComponent implements OnInit {

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
