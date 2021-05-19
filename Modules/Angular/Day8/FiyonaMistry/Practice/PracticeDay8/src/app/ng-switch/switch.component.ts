import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  Item : Array<any> = [];
  selectedValue: string= 'Two';  

  constructor() { 
    this.Item = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}]; 
  }

  ngOnInit(): void {
  }

}
