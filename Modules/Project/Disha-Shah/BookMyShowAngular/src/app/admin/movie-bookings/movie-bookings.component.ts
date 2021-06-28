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

        item.dateToWatch = new Date(item.dateToWatch).getFullYear() + '-' + (new Date(item.dateToWatch).getMonth() + 1) + '-' + new Date(item.dateToWatch).getDate();
        item.bookingDate = new Date(item.bookingDate).getFullYear() + '-' + (new Date(item.bookingDate).getMonth() + 1) + '-' + new Date(item.bookingDate).getDate();
      
      })
      console.log(this.bookingsList)
    })
  }

}
