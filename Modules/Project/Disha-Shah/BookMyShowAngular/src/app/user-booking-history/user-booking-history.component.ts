import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventBookingService } from '../events/event-booking.service';
import { EventsService } from '../events/events.service';
import { IActivities } from '../models/IActivities';
import { IEventBookings } from '../models/IEventBookings';
import { IMovieBookings } from '../models/IMovieBookings';
import { IMovies } from '../models/IMovies';
import { IUser } from '../models/IUser';
import { MovieBookingsService } from '../movies/movie-bookings.service';
import { MoviesService } from '../movies/movies.service';
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

  constructor(private userService: UserService, private movieBookingsService: MovieBookingsService, private moviesService: MoviesService, private eventBookingsService: EventBookingService, private eventsService: EventsService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
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
    this.movieBookingsService.getMovieBookingsByContact(this.userContact)
    .subscribe(bookingHistory => {
      this.moviebookingHistoryList = bookingHistory,

      this.moviesService.getMovies()
      .subscribe(movies => {
        this.moviesList = movies

        this.moviebookingHistoryList.forEach(item => {
          this.moviesList.forEach(element => {
            if(item.movie == element.name){
              item.image = element.image;
              item.certification = element.certification.certification1
              item.dateOfMovie = new Date(item.dateToWatch).getFullYear().toString() + '-' + (new Date(item.dateToWatch).getMonth() + 1).toString() +'-' + new Date(item.dateToWatch).getDate().toString();
            }
          })
        })
      })

      console.log(this.moviebookingHistoryList)
    })
  }

  getUserEventBookings(){
    
    this.eventBookingsService.getEventBookingsByContact(this.userContact)
    .subscribe(bookingHistory => {
      this.eventBookingHistoryList = bookingHistory,

      this.eventsService.getEvents()
      .subscribe(events => {
        this.eventsList = events

        this.eventBookingHistoryList.forEach(item => {
          this.eventsList.forEach(element => {
            if(item.event == element.event){
              item.image = element.image;
              item.dateOfShow = new Date(item.dateOfEvent).getFullYear().toString() + '-' + (new Date(item.dateOfEvent).getMonth() + 1).toString() +'-' + new Date(item.dateOfEvent).getDate().toString();
            }
          })
        })
      })

      console.log(this.eventsList)
      console.log(this.eventBookingHistoryList)
    })

  }

}
