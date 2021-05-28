import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  providers: [CalcService],
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  num1:number;
  num2:number;
  data:number;
    constructor(private calcservice:CalcService) { }

    ngOnInit() {
    }
  add()
  {
  this.data=this.calcservice.add(this.num1, this.num2);
  }
  display()
  {
    this.calcservice.display();
  }
}
