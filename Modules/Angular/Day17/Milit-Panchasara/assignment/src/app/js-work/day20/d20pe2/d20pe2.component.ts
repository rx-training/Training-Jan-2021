import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d20pe2',
  templateUrl: './d20pe2.component.html',
  styleUrls: ['./d20pe2.component.css']
})
export class D20pe2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d20/pe2-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
