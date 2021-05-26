import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-day15-assignment',
  templateUrl: './day15-assignment.component.html',
  styleUrls: ['./day15-assignment.component.css'],
  
})
export class Day15AssignmentComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
   
    this.loadscript('/assets/js/assignment15.js');
  }
  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }
  

}
