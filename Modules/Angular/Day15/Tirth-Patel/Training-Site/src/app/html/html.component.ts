import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
 
})
export class HtmlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("html component invoked")
  }

}
