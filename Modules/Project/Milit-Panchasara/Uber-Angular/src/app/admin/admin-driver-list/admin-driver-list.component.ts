import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { GridApi } from 'ag-grid-community';

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
    this.localAdminService.allData.drivers.forEach(driver => {
      this.rowData.push({
        id:driver.driverId,
        name:driver.firstName + ' ' + driver.lastName,
        email:driver.email,
        contactnumber:driver.contactNumber,
        datejoined:driver.createdAt,
        moneyearned:this.totalMoneyEarned(driver.driverId),
        totaltrips:this.totalTrips(driver.driverId),
        cancelledtrips:this.totalCancelledTrips(driver.driverId)
      });
    });
    this.fillAllCellsWithWidthMeasurement();
  }

  columnDefs = [
    { field: 'id' , sortable: true, filter: true},
    { field: 'name' , sortable: true, filter: true, resizable: true},
    { field: 'email', sortable: true, filter: true, resizable: true},
    { field: 'contactnumber', sortable: true, filter: true},
    { field: 'datejoined', sortable: true, filter: true},
    { field: 'moneyearned', sortable: true, filter: true},
    { field: 'totaltrips', sortable: true, filter: true},
    { field: 'cancelledtrips', sortable: true, filter: true}
  ];

  fillAllCellsWithWidthMeasurement() {
    Array.prototype.slice
      .call(document.querySelectorAll('.ag-cell'))
      .forEach(function (cell) {
        var width = cell.offsetWidth;
        var isFullWidthRow = cell.parentElement.childNodes.length === 1;
        cell.textContent = (isFullWidthRow ? 'Total width: ' : '') + width + 'px';
      });
  }
  

  rowData = [];

  totalMoneyEarned(driverId:number) {
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
