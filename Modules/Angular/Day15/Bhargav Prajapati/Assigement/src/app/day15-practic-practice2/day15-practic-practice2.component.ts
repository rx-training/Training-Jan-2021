import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day15-practic-practice2',
  templateUrl: './day15-practic-practice2.component.html',
  styleUrls: ['./day15-practic-practice2.component.css']
})
export class Day15PracticPractice2Component implements OnInit {

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
