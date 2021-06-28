import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBookingService } from '../events/event-booking.service';
import { EventsService } from '../events/events.service';
import { IActivities } from '../models/IActivities';
import { ICertifications } from '../models/ICertifications';
import { IEventBookings } from '../models/IEventBookings';
import { IMovieBookings } from '../models/IMovieBookings';
import { IMovies } from '../models/IMovies';
import { IUser } from '../models/IUser';
import { CertificationService } from '../movies/certification.service';
import { MovieBookingsService } from '../movies/movie-bookings.service';
import { MoviesService } from '../movies/movies.service';
import { TheatreService } from '../movies/theatre.service';
import { UserService } from '../movies/user.service';

@Component({
  selector: 'app-user-booking-history',
  templateUrl: './user-booking-history.component.html',
  styleUrls: ['./user-booking-history.component.css']
})
export class UserBookingHistoryComponent implements OnInit, OnDestroy {

  usersList: Array<IUser> = [];

  userContact: string = '';
  userInfo: any;
  userName: string = '';

  moviesList: Array<IMovies> = [];
  moviebookingHistoryList: Array<IMovieBookings> = [];

  eventsList: Array<IActivities> = [];
  eventBookingHistoryList: Array<IEventBookings> = [];

  dateToWatch: string = '';

  getAllUsersSub: Subscription;
  getAllMovieBookingsByContactSub: Subscription;
  getAllTheatreSub: Subscription;
  getAllEventBookingsByContactSub: Subscription;
  getAllEventSub: Subscription;

  constructor(
    private userService: UserService, 
    private movieBookingsService: MovieBookingsService, 
    private certificationsService: CertificationService, 
    private theatresService: TheatreService,
    private eventBookingsService: EventBookingService, 
    private eventsService: EventsService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(){
    this.getAllUsersSub.unsubscribe();
    this.getAllMovieBookingsByContactSub.unsubscribe();
    this.getAllTheatreSub.unsubscribe();
    this.getAllEventBookingsByContactSub.unsubscribe();
    this.getAllEventSub.unsubscribe();
  }

  getUsers(){
    this.getAllUsersSub = this.userService.getUsers()
      .subscribe(users => {
        this.usersList = users,
        this.userInfo = JSON.parse(localStorage.getItem("logged_in_user")),
        this.userName = this.userInfo.username,
        this.usersList.forEach(element => {
          if(element.userName == this.userName){
            this.userContact = element.contactNo
          }
        })

        this.getUserMovieBookings()

        this.getUserEventBookings();
      })
  }

  getUserMovieBookings(){
    this.getAllMovieBookingsByContactSub = this.movieBookingsService.getMovieBookingsByContact(this.userContact)
    .subscribe(bookingHistory => {
      this.moviebookingHistoryList = bookingHistory,

      this.moviebookingHistoryList.forEach(item => {
        this.getAllTheatreSub = this.theatresService.getTheatre(item.theatreId)
        .subscribe(theatre => {
          item.theatre = theatre[0]
        })

        item.dateToWatch = new Date(item.dateToWatch).getFullYear() + '-' + (new Date(item.dateToWatch).getMonth() + 1) + '-' + new Date(item.dateToWatch).getDate();
      })
      console.log(this.moviebookingHistoryList)
    })
  }

  getUserEventBookings(){
    
    this.getAllEventBookingsByContactSub = this.eventBookingsService.getEventBookingsByContact(this.userContact)
    .subscribe(bookingHistory => {
      this.eventBookingHistoryList = bookingHistory,

      this.eventBookingHistoryList.forEach(item => {
        this.getAllEventSub = this.eventsService.getEvent(item.eventId)
        .subscribe(events => {
          console.log(events)
          item.event = events[0]
  
          item.event.dateOfEvent = new Date(item.event.dateOfEvent).getFullYear() + '-' + (new Date(item.event.dateOfEvent).getMonth() + 1) + '-' + new Date(item.event.dateOfEvent).getDate();
      })

      })

      console.log(this.eventBookingHistoryList)
    })

  }

}
