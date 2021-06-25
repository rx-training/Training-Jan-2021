import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  localAdminService:AdminService;
  getAllUsersObv: Subscription;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }
  ngOnDestroy(): void {
    this.getAllUsersObv.unsubscribe();
  }

  ngOnInit(): void {
    this.getAllUsersObv = this.adminService.getAllUsers()
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
