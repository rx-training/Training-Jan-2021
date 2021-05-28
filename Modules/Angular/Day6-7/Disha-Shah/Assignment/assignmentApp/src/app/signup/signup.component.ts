import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Name: string = '';
  Address: string = '';
  PanNo: string = '';
  displayBtn: string = 'block';

  Signup(){
    if(this.Name == '')
    {
      alert('Name is required');
    }
    else if(this.Address == ''){
      alert('Address is required');
    }
    else if(this.PanNo == ''){
      alert('Pan Number is required');
    }
    else{
      alert('You have successfully registered!');
      this.displayBtn = 'none';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
