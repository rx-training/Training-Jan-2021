import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-trip-list',
  templateUrl: './admin-trip-list.component.html',
  styleUrls: ['./admin-trip-list.component.css']
})
export class AdminTripListComponent implements OnInit {

  localAdminService:AdminService;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  ngOnInit(): void {
  }
}
