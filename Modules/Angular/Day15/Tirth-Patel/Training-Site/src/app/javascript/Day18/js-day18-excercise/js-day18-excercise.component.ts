import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day18-excercise',
  templateUrl: './js-day18-excercise.component.html',
  styleUrls: ['./js-day18-excercise.component.css']
})
export class JsDay18ExcerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day18/Prac.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}