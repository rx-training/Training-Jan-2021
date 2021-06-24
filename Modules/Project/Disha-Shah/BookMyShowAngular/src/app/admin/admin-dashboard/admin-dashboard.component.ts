import { Component, OnDestroy, OnInit } from '@angular/core';
import { DynamicNavbarService } from 'src/app/dynamic-navbar.service';
import { EventBookingService } from 'src/app/events/event-booking.service';
import { EventVenuesService } from 'src/app/events/event-venues.service';
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
export class AdminDashboardComponent implements OnInit, OnDestroy {

  totalMovies: number = 0;
  totalEvents: number = 0;
  totalAdmins: number = 0;
  totalUsers: number = 0;
  totalMovieBookings: number = 0;
  totalEventBookings: number = 0;
  totalNavbarComponents: number = 0;
  totalEventVenues: number = 0;

  constructor(
    private moviesService: MoviesService, 
    private eventsService: EventsService, 
    private movieBookingsService: MovieBookingsService,
    private eventBookingsService: EventBookingService,
    private userService: UserService,
    private navbarService: DynamicNavbarService,
    private eventVenuesService: EventVenuesService
  ) { }

  ngOnInit(): void {
    this.getMoviesLength();
    this.getEventsLength();
    this.getMovieBookingsLength();
    this.getEventBookingsLength();
    this.getUsersLength();
    this.getNavbarsLength();
    this.getEventVenuesLength();
  }

  ngOnDestroy(){
    this.getMoviesLength();
    this.getEventsLength();
    this.getMovieBookingsLength();
    this.getEventBookingsLength();
    this.getUsersLength();
    this.getNavbarsLength();
    this.getEventVenuesLength();
  }

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

  getNavbarsLength(){
    this.navbarService.getDynamicNavbars()
    .subscribe(navbars => {
      this.totalNavbarComponents = navbars.length
    })
  }

  getEventVenuesLength(){
    this.eventVenuesService.getEventVenues()
    .subscribe(eventVenues => {
      this.totalEventVenues = eventVenues.length
    })
  }

}
