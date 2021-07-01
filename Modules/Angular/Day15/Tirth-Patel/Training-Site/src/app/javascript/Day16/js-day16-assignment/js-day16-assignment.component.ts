import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day16-assignment',
  templateUrl: './js-day16-assignment.component.html',
  styleUrls: ['./js-day16-assignment.component.css']
})
export class JsDay16AssignmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day16/Assignment.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}