import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day17-assignment',
  templateUrl: './js-day17-assignment.component.html',
  styleUrls: ['./js-day17-assignment.component.css']
})
export class JsDay17AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day17/Assignment.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
