import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    this.loadscript('/assets/jsfiles/d181.js')
  }
  loadscript(src)
  {
    var script = document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }
  

}
