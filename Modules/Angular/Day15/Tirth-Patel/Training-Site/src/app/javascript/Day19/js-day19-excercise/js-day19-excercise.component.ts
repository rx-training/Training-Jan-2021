import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day19-excercise',
  templateUrl: './js-day19-excercise.component.html',
  styleUrls: ['./js-day19-excercise.component.css']
})
export class JsDay19ExcerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day19/Prac.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
