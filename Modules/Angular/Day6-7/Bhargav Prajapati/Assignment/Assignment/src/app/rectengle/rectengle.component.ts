import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectengle',
  templateUrl: './rectengle.component.html',
  styleUrls: ['./rectengle.component.css']
})
export class RectengleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Length: number = 0;
  Width: number = 0;
  Calculate: number = 0;
  GetArea(): void {
    this.Calculate = this.Length * this.Width
  }

}
