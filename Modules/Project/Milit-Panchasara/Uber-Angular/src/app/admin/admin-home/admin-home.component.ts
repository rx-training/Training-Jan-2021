import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  localAdminService:AdminService;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  ngOnInit(): void {
    this.adminService.getAllUsers()
    .subscribe(x => {
      this.adminService.allData = x;
    },
    error => {
      console.log(error);
    });
  }

  logoutAdmin() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
