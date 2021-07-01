import { Component, OnInit } from '@angular/core';
import { ListDemoService } from '../list-demo.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  providers:[ListDemoService],
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
value :number;
 list:number[]=[];
  constructor(private listservice:ListDemoService) { }

  ngOnInit() {
  }
 public AddNum(value:number)
  {
this.listservice.addNum(value);
//this.list=this.listservice.getList();

const numbersObservable = this.listservice.getnumbers();

        numbersObservable.subscribe((numberlist: any[]) => {
            this.list = numberlist;
        });

  }

}
