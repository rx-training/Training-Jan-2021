import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-rider-rating',
  templateUrl: './rider-rating.component.html',
  styleUrls: ['./rider-rating.component.css']
})
export class RiderRatingComponent implements OnInit {

  rating: number;
  tripId: number;

  constructor(private tripService:TripService, private router:Router) { }

  ngOnInit(): void {
    this.tripId = this.tripService.currentTrip.tripId;
  }

  setRating(starNo) {
    this.rating = starNo;
  }

  highlistStars(starNo:number) {
    for(var i = 1; i <= starNo; i++) {
        document.getElementById('star-'+i).classList.add('fa-star');
        document.getElementById('star-'+i).classList.add('text-warning');
        document.getElementById('star-'+i).classList.remove('fa-star-o');
    }
    for(var i = starNo+1; i <= 5; i++) {
        document.getElementById('star-'+i).classList.remove('fa-star');
        document.getElementById('star-'+i).classList.remove('text-warning');
        document.getElementById('star-'+i).classList.add('fa-star-o');
    }
  }

  submitRating() {
    this.tripService.setRatings(this.rating)
    .subscribe(x => {
      console.log(x);
      this.router.navigate(['/rider/dashboard']);
  });

  }

  skipRating() {
    this.router.navigate(['/rider/dashboard']);
  }
}
