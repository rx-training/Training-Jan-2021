import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day20-excercise',
  templateUrl: './js-day20-excercise.component.html',
  styleUrls: ['./js-day20-excercise.component.css']
})
export class JsDay20ExcerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day20/Excercise.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}