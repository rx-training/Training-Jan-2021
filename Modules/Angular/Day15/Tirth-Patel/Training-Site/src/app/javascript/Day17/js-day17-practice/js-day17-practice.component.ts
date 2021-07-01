import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day17-practice',
  templateUrl: './js-day17-practice.component.html',
  styleUrls: ['./js-day17-practice.component.css']
})
export class JsDay17PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day15/Practice.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
