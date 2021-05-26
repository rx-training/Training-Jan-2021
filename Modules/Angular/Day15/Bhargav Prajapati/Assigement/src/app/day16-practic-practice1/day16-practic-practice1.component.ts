import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day16-practic-practice1',
  templateUrl: './day16-practic-practice1.component.html',
  styleUrls: ['./day16-practic-practice1.component.css']
})
export class Day16PracticPractice1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  checking()
    {
        var val1=prompt("please enter the value")

        if(val1== "")
        {
            alert("please enter value");
        }
        else
        {
            alert("Thank You");
        }
    }

}
