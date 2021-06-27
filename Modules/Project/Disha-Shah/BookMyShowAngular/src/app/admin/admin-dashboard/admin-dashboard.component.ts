import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
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

  getAllMoviesSub: Subscription;
  getAllEventsSub: Subscription;
  getAllMovieBookingsSub: Subscription;
  getAllEventBookingsSub: Subscription;
  getAllUsersSub: Subscription;
  getAllNavbarsSub: Subscription;
  getAllEventVenuesSub: Subscription;

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
    this.getAllEventBookingsSub.unsubscribe();
    this.getAllEventVenuesSub.unsubscribe();
    this.getAllEventsSub.unsubscribe();
    this.getAllMovieBookingsSub.unsubscribe();
    this.getAllMoviesSub.unsubscribe();
    this.getAllNavbarsSub.unsubscribe();
    this.getAllUsersSub.unsubscribe();
  }

  getMoviesLength(){
    this.getAllMoviesSub = this.moviesService.getMovies()
    .subscribe(movies => {
      this.totalMovies = movies.length;
    })
  }

  getEventsLength(){
    this.getAllEventsSub = this.eventsService.getUniqueEvents()
    .subscribe(events => {
      this.totalEvents = events.length
    })
  }

  getMovieBookingsLength(){
    this.getAllMovieBookingsSub = this.movieBookingsService.getMovieBookings()
    .subscribe(movieBookings => {
      this.totalMovieBookings = movieBookings.length
    })
  }

  getEventBookingsLength(){
    this.getAllEventBookingsSub = this.eventBookingsService.getEventBookings()
    .subscribe(eventBookings => {
      this.totalEventBookings = eventBookings.length
    })
  }

  getUsersLength(){
    this.getAllUsersSub = this.userService.getUsers()
    .subscribe(users => {
      this.totalUsers = users.length
    })
  }

  getNavbarsLength(){
    this.getAllNavbarsSub = this.navbarService.getDynamicNavbars()
    .subscribe(navbars => {
      this.totalNavbarComponents = navbars.length
    })
  }

  getEventVenuesLength(){
    this.getAllEventVenuesSub = this.eventVenuesService.getEventVenues()
    .subscribe(eventVenues => {
      this.totalEventVenues = eventVenues.length
    })
  }

}
