import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-rider-list',
  templateUrl: './admin-rider-list.component.html',
  styleUrls: ['./admin-rider-list.component.css']
})
export class AdminRiderListComponent implements OnInit {

  localAdminService:AdminService;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  ngOnInit(): void {
  }

  unblockRider(riderId:number){
    this.adminService.blockUnblockRider("unblock", riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.localAdminService.allData.riders.find(x => x.riderId == riderId).isBlocked = false;
        alert(x.message);
      }
    });
  }

  blockRider(riderId:number){
    this.adminService.blockUnblockRider("block", riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.localAdminService.allData.riders.find(x => x.riderId == riderId).isBlocked = true;
        alert(x.message);
      }
    });
  }

  totalMoneySpent(riderId:number) {
    let allTrips = this.localAdminService.allData.trips.filter(x => x.riderId == riderId && x.cancelledBy == null);
    let moneySpent = 0;
    allTrips.forEach(trip => {
      moneySpent += trip.actualFairAmount;
    });
    return moneySpent.toFixed(2);
  }

  totalTrips(riderId:number){
    let allTrips = this.localAdminService.allData.trips.filter(x => x.riderId == riderId)
    return allTrips.length;
  }

  totalCancelledTrips(riderId:number){
    let allTrips = this.localAdminService.allData.trips.filter(x => x.riderId == riderId && x.cancelledBy == 'Rider');
    return allTrips.length;
  }

}
