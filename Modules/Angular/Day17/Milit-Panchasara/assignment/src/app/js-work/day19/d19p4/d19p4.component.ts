import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d19p4',
  templateUrl: './d19p4.component.html',
  styleUrls: ['./d19p4.component.css']
})
export class D19p4Component implements OnInit {

  constructor() { }

  
  ngOnInit(): void {
    this.loadScript('/assets/js/js-d19/p4-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
