import { Component, OnInit } from '@angular/core';
import {assignment} from '../../assets/js/assignment16.js'
@Component({
  selector: 'app-day16-assignment',
  templateUrl: './day16-assignment.component.html',
  styleUrls: ['./day16-assignment.component.css'],
})
export class Day16AssignmentComponent implements OnInit {

  constructor()
   { 
   
   }

  ngOnInit(): void {
    this.loadscript('/assets/js/assignment16.js');
  }

  loadscript(src:any)
  {
    var script=document.createElement("script");
    script.type="text/javascript";
    document.getElementsByTagName("body")[0].appendChild(script);
    script.src=src;
  }

}
