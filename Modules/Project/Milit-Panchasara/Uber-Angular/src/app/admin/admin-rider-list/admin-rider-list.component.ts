import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { RiderBlockButtonRenderer } from '../rider-block-button/rider-block-button.component';
import { Module } from 'ag-grid-community';

@Component({
  selector: 'app-admin-rider-list',
  templateUrl: './admin-rider-list.component.html',
  styleUrls: ['./admin-rider-list.component.css']
})
export class AdminRiderListComponent implements OnInit {
  localAdminService:AdminService;
  rowData = [];
  columnDefs;

  frameworkComponents;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
    this.columnDefs = [
      { field: 'id' , sortable: true, filter: true},
      { field: 'name' , sortable: true, filter: true, resizable: true},
      { field: 'email', sortable: true, filter: true, resizable: true},
      { field: 'contactnumber', sortable: true, filter: true},
      { field: 'datejoined', sortable: true, filter: true},
      { field: 'moneyspent', sortable: true, filter: true},
      { field: 'totaltrips', sortable: true, filter: true},
      { field: 'cancelledtrips', sortable: true, filter: true},
      { field: 'action', cellRenderer:'riderBlockButtonRenderer',
        cellRendererParams: {
          clicked: function(field: any, action) {
            if(action == 'block'){
              
            }
            alert(`${field} was clicked`);
          }
        },
      }
    ];

    this.frameworkComponents = {
      riderBlockButtonRenderer: RiderBlockButtonRenderer
    };
  }

  ngOnInit(): void {
    this.localAdminService.allData.riders.forEach(rider => {
      this.rowData.push({
        id:rider.riderId,
        name:rider.firstName + ' ' + rider.lastName,
        email:rider.email,
        contactnumber:rider.contactNumber,
        datejoined:rider.createdAt,
        moneyspent:this.totalMoneySpent(rider.riderId),
        totaltrips:this.totalTrips(rider.riderId),
        cancelledtrips:this.totalCancelledTrips(rider.riderId),
        action:rider
      });
    });
    this.fillAllCellsWithWidthMeasurement();
  }

fillAllCellsWithWidthMeasurement() {
    Array.prototype.slice
      .call(document.querySelectorAll('.ag-cell'))
      .forEach(function (cell) {
        var width = cell.offsetWidth;
        var isFullWidthRow = cell.parentElement.childNodes.length === 1;
        cell.textContent = (isFullWidthRow ? 'Total width: ' : '') + width + 'px';
      });
  }

  unblockRider(riderId:number){
    let blockUnblockRiderSub = this.adminService.blockUnblockRider("unblock", riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.localAdminService.allData.riders.find(x => x.riderId == riderId).isBlocked = false;
        alert(x.message);
        blockUnblockRiderSub.unsubscribe();
      }
    });
  }

  blockRider(riderId:number){
    let blockUnblockRiderSub = this.adminService.blockUnblockRider("block", riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.localAdminService.allData.riders.find(x => x.riderId == riderId).isBlocked = true;
        alert(x.message);
        blockUnblockRiderSub.unsubscribe();
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
