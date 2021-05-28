import { Component, OnInit } from '@angular/core';
import { ListDemoService } from '../list-demo.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  providers:[ListDemoService],
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
value:number;
 list:number[]=[];
  constructor(private listservice:ListDemoService) { }

  ngOnInit() {
  }
 public AddNum(value:number)
  {
this.listservice.addNum(value);
this.list=this.listservice.getList();
  }
}
