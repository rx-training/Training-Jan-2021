import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name:string ="jevik";
  ad:string ="Rajkot"
  pan:number=456212321;

  constructor() { }

  ngOnInit(): void {
  }

  data(){
    alert(`You Entered: Name = ${this.name}, Address = ${this.ad} And PanNo = ${this.pan}`);
  }

}
