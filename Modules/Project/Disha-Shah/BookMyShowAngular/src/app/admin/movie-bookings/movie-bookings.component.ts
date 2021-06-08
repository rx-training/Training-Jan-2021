import { Component, OnInit } from '@angular/core';
import { IMovieBookings } from 'src/app/models/IMovieBookings';
import { MovieBookingsService } from 'src/app/movies/movie-bookings.service';

@Component({
  selector: 'app-movie-bookings',
  templateUrl: './movie-bookings.component.html',
  styleUrls: ['./movie-bookings.component.css']
})
export class MovieBookingsComponent implements OnInit {

  bookingsList: Array<IMovieBookings> = [];

  getBookings(){
    this.bookingService.getMovieBookings()
    .subscribe(bookings => {
      this.bookingsList = bookings
    })
  }

  constructor(private bookingService: MovieBookingsService) { }

  ngOnInit(): void {
    this.getBookings();
  }

}
