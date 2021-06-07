import { Component, OnInit } from '@angular/core';
import { EventBookingService } from 'src/app/events/event-booking.service';
import { EventsService } from 'src/app/events/events.service';
import { IActivities } from 'src/app/models/IActivities';
import { IMovies } from 'src/app/models/IMovies';
import { MovieBookingsService } from 'src/app/movies/movie-bookings.service';
import { MoviesService } from 'src/app/movies/movies.service';
import { UserService } from 'src/app/movies/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalMovies: number = 0;
  totalEvents: number = 0;
  totalAdmins: number = 0;
  totalUsers: number = 0;
  totalMovieBookings: number = 0;
  totalEventBookings: number = 0;

  getMoviesLength(){
    this.moviesService.getMovies()
    .subscribe(movies => {
      this.totalMovies = movies.length;
    })
  }

  getEventsLength(){
    this.eventsService.getUniqueEvents()
    .subscribe(events => {
      this.totalEvents = events.length
    })
  }

  getMovieBookingsLength(){
    this.movieBookingsService.getMovieBookings()
    .subscribe(movieBookings => {
      this.totalMovieBookings = movieBookings.length
    })
  }

  getEventBookingsLength(){
    this.eventBookingsService.getEventBookings()
    .subscribe(eventBookings => {
      this.totalEventBookings = eventBookings.length
    })
  }

  getUsersLength(){
    this.userService.getUsers()
    .subscribe(users => {
      this.totalUsers = users.length
    })
  }

  constructor(
    private moviesService: MoviesService, 
    private eventsService: EventsService, 
    private movieBookingsService: MovieBookingsService,
    private eventBookingsService: EventBookingService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getMoviesLength();
    this.getEventsLength();
    this.getMovieBookingsLength();
    this.getEventBookingsLength();
    this.getUsersLength();
  }

}
