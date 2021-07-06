import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name:string;
  address:string;
  pan:string;
  message:string;

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    if(this.name!=null && this.address!=null && this.pan!=null){
      this.message=`Name is ${this.name} Address is ${this.address} and PAN ID is ${this.pan}`;
    }else{
      this.message="Something is missing! please check the crecentials that you have entered."
    }
  }

  reset(){
    this.name=null;
    this.address=null;
    this.pan=null;
    this.message=null;
  }
}
