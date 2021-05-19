import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  username: string = "";
  password: string = "";
  Result = " ";

  Validate() {
    if (this.username == "admin" && this.password == "admin") 
      {
        this.Result = "Success";
      }
    
    else{
      this.Result = "Failed";
    }
    console.log(this.Result);
  }




}
