import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15-index',
  templateUrl: './day15-index.component.html',
  styleUrls: ['./day15-index.component.css']
})
export class Day15IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/Day15/javascript.js')
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }
}
