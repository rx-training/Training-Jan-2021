import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RideType, RideTypeInterface } from 'src/app/models/RideType';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-ridetype-list',
  templateUrl: './admin-ridetype-list.component.html',
  styleUrls: ['./admin-ridetype-list.component.css']
})
export class AdminRidetypeListComponent implements OnInit {

  localAdminService:AdminService;

  constructor(private router:Router, private adminService:AdminService) { 
    this.localAdminService = this.adminService;
  }

  rideTypeForm:RideTypeInterface = new RideType();

  ngOnInit(): void {
    console.log(this.localAdminService.allData.rideTypes);
    
  }

  setForm(id) {
    if(id == 0) {
      this.rideTypeForm = new RideType();
      return;
    }
    let data = this.localAdminService.allData.rideTypes.find(x => x.rideTypeId == id);
    this.rideTypeForm = {
      rideTypeId: data.rideTypeId,
      rideName: data.rideName,
      seatingCapacity: data.seatingCapacity,
      pricePerKm: data.pricePerKm,
      createdAt: data.createdAt
    }
  }

  addRideType() {
    let addRideTypeSub = this.adminService.addRideType(this.rideTypeForm)
    .subscribe(x => {
      this.localAdminService.allData.rideTypes.push(x);
      addRideTypeSub.unsubscribe();
    },
    error => {
      console.log(error);
      addRideTypeSub.unsubscribe();
    });
  }

  updateRideType() {
    if(this.rideTypeForm.rideTypeId == 0 || this.rideTypeForm.rideTypeId == null) return;
    let updateRideType = this.adminService.updateRideType(this.rideTypeForm)
    .subscribe(x => {
      let index = this.localAdminService.allData.rideTypes.findIndex(x => x.rideTypeId == this.rideTypeForm.rideTypeId);
      this.localAdminService.allData.rideTypes[index] = x;
      updateRideType.unsubscribe();
    });
  }

}
