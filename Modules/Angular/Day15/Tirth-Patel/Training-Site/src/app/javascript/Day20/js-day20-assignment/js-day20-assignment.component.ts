import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day20-assignment',
  templateUrl: './js-day20-assignment.component.html',
  styleUrls: ['./js-day20-assignment.component.css']
})
export class JsDay20AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day20/Assignment.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}