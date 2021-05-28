import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  items = [];
  constructor() {
    this.items = [{id:1,name:"jevik"},{id:3,name:"Tirath"}]
   }

  ngOnInit(): void {
  }
  trackByItems(index: number, item: any): number { return item.id; }
}
