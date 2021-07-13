import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-penal',
  templateUrl: './admin-penal.component.html',
  styleUrls: ['./admin-penal.component.css']
})
export class AdminPenalComponent implements OnInit {

  constructor(private router : Router,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }
  
  logout(){
    localStorage.setItem('login', "false")
    localStorage.removeItem('Customerid');
    localStorage.removeItem('Customerphoneno');
    localStorage.removeItem('Customername');
    this.router.navigate(['user/Login_signup']);
  }

}
