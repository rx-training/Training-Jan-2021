import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day20-practice',
  templateUrl: './js-day20-practice.component.html',
  styleUrls: ['./js-day20-practice.component.css']
})
export class JsDay20PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day20/practice.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}