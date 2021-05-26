import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day17-assignment',
  templateUrl: './day17-assignment.component.html',
  styleUrls: ['./day17-assignment.component.css']
})
export class Day17AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/assignment17.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
