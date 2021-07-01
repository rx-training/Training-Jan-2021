import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day18-assignment',
  templateUrl: './js-day18-assignment.component.html',
  styleUrls: ['./js-day18-assignment.component.css']
})
export class JsDay18AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day18/Assignment.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
