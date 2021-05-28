import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-practic-practice4',
  templateUrl: './day16-practic-practice4.component.html',
  styleUrls: ['./day16-practic-practice4.component.css']
})
export class Day16PracticPractice4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadscript('/assets/js/Day16Practice4.js');
  }

  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
