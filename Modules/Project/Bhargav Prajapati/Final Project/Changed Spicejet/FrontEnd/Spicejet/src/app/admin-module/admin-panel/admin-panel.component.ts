import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private rout:Router) { }

  ngOnInit(): void {
  }

  navigate()
  {
    if(confirm("Are You Sure You Want to LogOut"))
    {
      sessionStorage.removeItem('token');
      this.rout.navigate(['Admin-Module']);
    }
  }

}
