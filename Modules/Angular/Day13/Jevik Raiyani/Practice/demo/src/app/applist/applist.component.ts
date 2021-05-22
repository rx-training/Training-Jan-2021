import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-applist',
  templateUrl: './applist.component.html',
  styleUrls: ['./applist.component.css']
})
export class ApplistComponent implements OnInit {

  @Input() listdata  = []

  constructor() { }

  ngOnInit(): void {
    console.log(this.listdata);

  }
 
}
