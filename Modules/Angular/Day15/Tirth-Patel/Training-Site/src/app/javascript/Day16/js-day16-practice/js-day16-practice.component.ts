import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-js-day16-practice',
  templateUrl: './js-day16-practice.component.html',
  styleUrls: ['./js-day16-practice.component.css']
})
export class JsDay16PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day16/Excercuse.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}