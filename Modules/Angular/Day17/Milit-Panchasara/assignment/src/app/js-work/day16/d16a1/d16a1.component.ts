import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d16a1',
  templateUrl: './d16a1.component.html',
  styleUrls: ['./d16a1.component.css']
})
export class D16a1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d16/a1-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
