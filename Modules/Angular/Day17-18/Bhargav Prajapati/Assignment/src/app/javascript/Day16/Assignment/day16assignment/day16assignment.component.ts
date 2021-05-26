import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16assignment',
  templateUrl: './day16assignment.component.html',
  styleUrls: ['./day16assignment.component.css']
})
export class Day16assignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/assignment16.js');
  }

  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
