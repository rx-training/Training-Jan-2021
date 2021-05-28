import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice2',
  templateUrl: './practice2.component.html',
  styleUrls: ['./practice2.component.css']
})
export class Practice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getcity(){
    var city1=prompt("Enter City number 1");
    var city2=prompt("Enter City number 2");
    var city3=prompt("Enter City number 3");
    var city4=prompt("Enter City number 4");
    var city5=prompt("Enter City number 5");
    var arr = [ city1 ,city2,city3,city4,city5 ]
    for(var i=0;i<5;i++)
    {
       alert(arr[i])
    }
  }

}
