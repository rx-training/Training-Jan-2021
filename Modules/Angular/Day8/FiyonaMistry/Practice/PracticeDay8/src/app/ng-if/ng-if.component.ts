import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  isActive : boolean = true;
  show : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  isActiveToggle(){
    this.isActive = !this.isActive;
  }

  showhide(){
    this.show = !this.show;
  }
}
