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
  rowData = [];
  columnDefs = [
    { field: 'id' , headerName:'Trip Id', sortable: true, filter: true, resizable: true, maxWidth:140},
    { field: 'riderid', headerName:'Rider Id', sortable: true, filter: true, resizable: true},
    { field: 'driverid', headerName:'Driver Id', sortable: true, filter: true, resizable: true},
    { field: 'ridetype', headerName:'Ride type', sortable: true, filter: true},
    { field: 'source', sortable: true, filter: true},
    { field: 'destination', sortable: true, filter: true},
    { field: 'starttime', headerName:'Start time', sortable: true, filter: true},
    { field: 'endtime', headerName:'End time', sortable: true, filter: true},
    { field: 'cancelledBy', headerName:'Cancelled by', sortable: true, filter: true},
    { field: 'cost', headerName:'Trip cost', sortable: true, filter: true}
  ];

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  ngOnInit(): void {
    this.localAdminService.allData.trips.forEach(trip => {
      this.rowData.push({
        id:trip.tripId,
        riderid:trip.riderId,
        driverid:trip.driverId,
        ridetype:trip.rideTypeId,
        source:trip.sourceLocationId,
        destination:trip.destinationLocationId,
        starttime:trip.startTime != null ? trip.startTime : '-',
        endtime:trip.endTime != null ? trip.endTime : '-',
        cancelledBy:trip.cancelledBy != null ? trip.cancelledBy : '-',
        cost:trip.actualFairAmount != null ? trip.actualFairAmount.toFixed(2) : '-'
      });
    });
  }
}
