import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildViewComponentComponent } from '../child-view-component/child-view-component.component';

@Component({
  selector: 'app-parent-view-component',
  templateUrl: './parent-view-component.component.html',
  styleUrls: ['./parent-view-component.component.css']
})
export class ParentViewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Parent calls on @ViewChild()';

  @ViewChild('childView', {static : true}) child : ChildViewComponentComponent;

  increment(){
    this.child.increment();
  }
  decrement(){
    this.child.decrement();
  }
}
