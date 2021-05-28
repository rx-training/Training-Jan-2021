import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d17pe1',
  templateUrl: './d17pe1.component.html',
  styleUrls: ['./d17pe1.component.css']
})
export class D17pe1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d17/pe1-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
