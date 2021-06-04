import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-driver-list',
  templateUrl: './admin-driver-list.component.html',
  styleUrls: ['./admin-driver-list.component.css']
})
export class AdminDriverListComponent implements OnInit {

  localAdminService:AdminService;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  ngOnInit(): void {
  }

  totalMoneySpent(driverId:number) {
    let allTrips = this.localAdminService.allData.trips.filter(x => x.driverId == driverId && x.cancelledBy == null);
    let moneySpent = 0;
    allTrips.forEach(trip => {
      moneySpent += trip.actualFairAmount;
    });
    return moneySpent.toFixed(2);
  }

  totalTrips(driverId:number){
    let allTrips = this.localAdminService.allData.trips.filter(x => x.driverId == driverId)
    return allTrips.length;
  }

  totalCancelledTrips(driverId:number){
    let allTrips = this.localAdminService.allData.trips.filter(x => x.driverId == driverId && x.cancelledBy == 'Driver');
    return allTrips.length;
  }

}
