import { Component, OnInit } from '@angular/core';
import { CalcserviceService } from '../calcservice.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
num1:string;
num2:string;
data:number;
  constructor(private calcservice:CalcserviceService) { }

  ngOnInit() {
  }
add()
{
this.data=this.calcservice.add(parseInt((this.num1)),parseInt((this.num2)));
}
display()
{
  this.calcservice.display();
}
}