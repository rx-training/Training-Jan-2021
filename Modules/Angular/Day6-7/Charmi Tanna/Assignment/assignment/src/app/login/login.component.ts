import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string ="";
  password : string ="";
  result : string ="";
  get()
  {
    if(this.username="admin" )
    {
      if(this.password=="admin")
      {
        this.result="Login is valid";
      } 
    }
    else
    {
      this.result="Login is not valid";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
