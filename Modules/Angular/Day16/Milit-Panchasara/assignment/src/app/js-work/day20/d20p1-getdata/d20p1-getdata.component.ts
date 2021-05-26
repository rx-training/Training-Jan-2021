import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d20p1-getdata',
  templateUrl: './d20p1-getdata.component.html',
  styleUrls: ['./d20p1-getdata.component.css']
})
export class D20p1GetdataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScript('/assets/js/js-d20/p1-getData-script1.js');
  }

  loadScript(src:any){
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src = src;
  }

}
