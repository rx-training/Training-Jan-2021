import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  Name : string = "Fiyona";
  Today : Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
