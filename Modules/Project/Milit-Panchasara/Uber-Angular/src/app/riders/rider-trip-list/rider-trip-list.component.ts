import { Component, OnInit } from '@angular/core';
import { RiderService } from '../rider.service';
import { RiderTripInterface } from 'src/app/models/RiderTrip';

@Component({
  selector: 'app-rider-trip-list',
  templateUrl: './rider-trip-list.component.html',
  styleUrls: ['./rider-trip-list.component.css']
})
export class RiderTripListComponent implements OnInit {

  constructor(private riderService:RiderService) { }
  
  showRecords:number = 10;

  allTrips:RiderTripInterface[] = [];

  ngOnInit(): void {
    this.riderService.getAllTrips()
    .subscribe(x => {
      this.allTrips = x;
    },
    () => {
      alert("Something went wrong.");

    });
  }

  showMore() {
    this.showRecords += 10;
  }

}
