import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d20pe3',
  templateUrl: './d20pe3.component.html',
  styleUrls: ['./d20pe3.component.css']
})
export class D20pe3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d20/pe3-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
