import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
  title = 'my-app';
  Name ='niraj spara';
  Address = 'Bhavnagar';
  names = 'string';
  btn="Submit";
  btnemp ="Submit";
  value:number = 10;
  EmpName : string ="Radhuvansi partap";
  constructor (){

  }
  ngOnInit():void{}
  demo(){
    console.log('Hello '+ this.EmpName);
  }
}

// export class HelloComponent implements OnInit {

//   constructor() {
    
//    }

//   ngOnInit(): void {
//   }

  
// }


