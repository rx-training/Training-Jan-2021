import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMovieBookings } from 'src/app/models/IMovieBookings';
import { MovieBookingsService } from 'src/app/movies/movie-bookings.service';
import { TheatreService } from 'src/app/movies/theatre.service';

@Component({
  selector: 'app-movie-bookings',
  templateUrl: './movie-bookings.component.html',
  styleUrls: ['./movie-bookings.component.css']
})
export class MovieBookingsComponent implements OnInit, OnDestroy {

  bookingsList: Array<IMovieBookings> = [];
  getAllMovieBookings: Subscription;
  getTheatre: Subscription;

  constructor(private bookingService: MovieBookingsService, private theatresService: TheatreService) { }

  ngOnInit(): void {
    this.getBookings();
  }

  ngOnDestroy(){
    this.getAllMovieBookings.unsubscribe();
    this.getTheatre.unsubscribe();
  }

  getBookings(){
    this.getAllMovieBookings = this.bookingService.getMovieBookings()
    .subscribe(bookings => {
      this.bookingsList = bookings,

      this.bookingsList.forEach(item => {
        this.getTheatre = this.theatresService.getTheatre(item.theatreId)
        .subscribe(theatres => {
          item.theatre = theatres[0]
        })
      })
      console.log(this.bookingsList)
    })
  }

}
