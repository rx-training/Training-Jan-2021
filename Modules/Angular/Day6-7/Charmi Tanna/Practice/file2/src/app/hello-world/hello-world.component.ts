import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  
  name : string="";
  
  // values :any= '';

  // onKey(event: any) { // without type info
  //   this.values + event.target.value + ' | ';
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
