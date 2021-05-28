import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: [
    './component.component.css'
  ]
})

export class ComponentComponent implements OnInit {

  moodSet = [
    {
      Name : "Namra Patel", Mood : "sad" 
    },
    {
      Name : "Jitendra Patel", Mood : "happy" 
    },
    {
      Name : "Asha Patel", Mood : "sad" 
    }
  ];

  color = '';
  constructor() { }
  showSad = false;
  numbers = [];
  hero = '';
  flagFor = 1;
  ngForNumber = 0;
  ndSwitchValue : string = '';

  ngIfFlag = false;
  Name  = '';
  Status : boolean = false;
  ngOnInit(): void {
  }
  ngIfFunction()
  {
    this.ngIfFlag = true;
  }
  
  addNgFor()
  {
    this.numbers.push(this.flagFor);
    this.flagFor ++;
  }
  StatusCheck()
  {
    if(Math.random() > 0.5)
    {
      this.Status = true;
    }
    else{
      this.Status = false;
    }
  }
}
