import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child : ChildComponent;

  data:any[] = [1,2,3,4,5];
  data2 = "abcs";
  data3 = "milit";
  constructor() { }

  ngOnInit(): void {
    
  }

  changeValue() {
    this.data[0] += 100;
    console.log(this.child);
    this.data2 += "milit";
  }

  countChangedHandler(event: number, i:number) {
    this.data[i] = event;
    console.log(this.data);
    
  }
  
}
