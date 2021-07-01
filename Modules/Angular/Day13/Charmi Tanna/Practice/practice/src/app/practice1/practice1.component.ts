import { Component, OnInit, ViewChild,ElementRef,Input } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  @Input() data : string ="";
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
