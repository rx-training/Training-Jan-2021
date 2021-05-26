import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d15pe4',
  templateUrl: './d15pe4.component.html',
  styleUrls: ['./d15pe4.component.css']
})
export class D15pe4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d15/pe4-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
