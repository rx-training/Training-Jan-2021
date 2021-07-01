import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
number1 : number =0;
number2 : number =0;
number3 : number =0;
add()
{
  this.number3 = this.number1 + this.number2;
}
sub()
{
  this.number3 = this.number1 - this.number2;
}
mul()
{
  this.number3 = this.number1 * this.number2;
}
div()
{
  this.number3 = this.number1 / this.number2;
}
  constructor() { }

  ngOnInit(): void {
  }

}
