import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
  @ViewChild(CounterComponent) counterComponent :any= CounterComponent ;
  increase()
  {
    this.counterComponent.IncreseBy1();
  }
  decrease()
  {
    this.counterComponent.DecreseBy1();
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
