import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-componanat',
  templateUrl: './child-componanat.component.html',
  styleUrls: ['./child-componanat.component.css']
})
export class ChildComponanatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // @Output() valueChange=new EventEmitter();
  // counter=0; 
  // valueChanged()
  // {
  //   this.counter=this.counter+1;
  //   this.valueChange.emit(this.counter);
  // }

  @Input() Stock:number;
  @Input() ProductId:number;
  @Output() StockvalueChanges=new EventEmitter();
  color = '';
  updatedstockvalue: number; 
  stockValueChanged()
  {
      this.StockvalueChanges.emit({ id: this.ProductId, updatedstockvalue: this.updatedstockvalue });
      this.updatedstockvalue=null;
  }
  ngOnChanges() {

    if (this.Stock > 10) {
        this.color = 'green';
    } else {
        this.color = 'red';
    }
}
}
