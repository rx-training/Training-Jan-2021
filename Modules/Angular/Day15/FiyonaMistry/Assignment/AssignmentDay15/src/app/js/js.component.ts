import { Component, OnInit } from '@angular/core';
declare var cal : any;

@Component({
  selector: 'app-js',
  templateUrl: './js.component.html',
  styleUrls: ['./js.component.css']
})
export class JSComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCal(){
    cal();
  }
}
