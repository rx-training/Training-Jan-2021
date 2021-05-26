import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d15pe2',
  templateUrl: './d15pe2.component.html',
  styleUrls: ['./d15pe2.component.css']
})
export class D15pe2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d15/pe2-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
