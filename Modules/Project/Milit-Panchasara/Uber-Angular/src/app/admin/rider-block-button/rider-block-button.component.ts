import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-rider-block-button',
  templateUrl: './rider-block-button.component.html',
  styleUrls: ['./rider-block-button.component.css']
})
export class RiderBlockButtonRenderer implements  OnDestroy  {
  
  constructor(private router:Router, private adminService:AdminService) { 
  }
  params: any;

  agInit(params: any): void {
    this.params = params;
    console.log(params);
    
  }

  unblockRider(value) {
    let blockUnblockRiderSub = this.adminService.blockUnblockRider("unblock", this.params.value.riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.adminService.allData.riders.find(x => x.riderId == this.params.value.riderId).isBlocked = false;
        alert(x.message);
        blockUnblockRiderSub.unsubscribe();
      }
    });
  }

  blockRider(value) {
    let blockUnblockRiderSub = this.adminService.blockUnblockRider("block", this.params.value.riderId)
    .subscribe(x => {
      if(x.status == "1"){
        this.adminService.allData.riders.find(x => x.riderId == this.params.value.riderId).isBlocked = true;
        alert(x.message);
        blockUnblockRiderSub.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    // no need to remove the button click handler 
    // https://stackoverflow.com/questions/49083993/does-angular-automatically-remove-template-event-listeners
  }
}
