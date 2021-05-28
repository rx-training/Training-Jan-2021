import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d15pe6',
  templateUrl: './d15pe6.component.html',
  styleUrls: ['./d15pe6.component.css']
})
export class D15pe6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d15/pe6-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
