import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-employers',
  templateUrl: './top-employers.component.html',
  styleUrls: ['./top-employers.component.css']
})
export class TopEmployersComponent implements OnInit {

  topEmployers = [];

  constructor() {
      
     }

  ngOnInit(): void {
    fetch("../../../../assets/json/topEmployers.json")
      .then(res => res.json()
      .then(employers => {
        var i =[];
        for(var j=0; j<employers.length; j++){
          i.push(employers[j].img);
        }
        this.topEmployers = i;
      }));
  }

}
