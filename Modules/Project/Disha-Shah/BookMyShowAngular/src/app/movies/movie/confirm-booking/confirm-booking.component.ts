import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
import { MovieBookingsService } from '../../movie-bookings.service';
import { MoviesService } from '../../movies.service';
import { TheatreService } from '../../theatre.service';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit, OnDestroy {

  movieName: string = '';
  movieId: number = 0;
  language: string = '';
  category: string = '';
  theatre: string = '';
  theatreId: number = 0;
  showTime: string = '';
  showTimeArray: Array<any> = [];
  noOfSeats: number = 0;

  selectedExecutiveSeatsList: Array<any> = [];
  executiveTotal: number = 0;

  selectedPremiumSeatsList: Array<any> = [];
  premiumTotal: number = 0;

  selectedNormalSeatsList: Array<any> = [];
  normalTotal: number = 0;

  selectedReclinerSeatsList: Array<any> = [];
  reclinerTotal: number = 0;

  totalAmount: number = 0;

  usersList: Array<IUser> = [];
  userContact: string = '';
  userInfo: any;
  userName: string = '';
  seats: Array<any> = [];
  city: string = '';
  dateToWatch: Date = new Date();
  day: string = '';
  month: string = '';

  getAllUsersSub: Subscription;
  getAllTheatreSub: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private service: MoviesService, private movieBookingsService: MovieBookingsService, private userService: UserService, private theatreService: TheatreService) { }

  ngOnInit(): void {
    this.getMovieInfo();
    this.getSelectedSeats();
    this.getUsers();
    this.getTheatre();
  }

  ngOnDestroy(){
    this.getAllUsersSub.unsubscribe();
    this.getAllTheatreSub.unsubscribe();
  }

  getMovieInfo(){
    this.movieName = this.route.snapshot.paramMap.get('name');
    this.movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.language = this.route.snapshot.paramMap.get('language');
    this.category = this.route.snapshot.paramMap.get('category');
    if(parseInt(this.route.snapshot.paramMap.get('date').split('-')[0]) < 10){
      this.day = '0' + this.route.snapshot.paramMap.get('date').split('-')[0]
    }
    else{
      this.day = this.route.snapshot.paramMap.get('date').split('-')[0]
    }
    if(parseInt(this.route.snapshot.paramMap.get('date').split('-')[1]) < 10){
      this.month = '0' + this.route.snapshot.paramMap.get('date').split('-')[1]
    }
    else{
      this.month = this.route.snapshot.paramMap.get('date').split('-')[1]
    }
    this.dateToWatch = new Date(new Date().getFullYear() + '-' + this.month + '-' + this.day);
    this.theatre = this.route.snapshot.paramMap.get('theatre');
    this.theatreId = parseInt(this.route.snapshot.paramMap.get('theatreId'));
    this.showTime = this.route.snapshot.paramMap.get('showTime');
    this.noOfSeats = parseInt(this.route.snapshot.paramMap.get('numberOfSeats'));
    this.showTimeArray = this.showTime.split(':');
  }

  getUsers(){
    this.getAllUsersSub = this.userService.getUsers()
    .subscribe(users => {
      this.usersList = users,
      this.userInfo = JSON.parse(localStorage.getItem("logged_in_user"))
      this.userName = this.userInfo.username
      this.usersList.forEach(element => {
        if(element.userName == this.userName){
          this.userContact = element.contactNo
        }
      })
    })
  }

  getTheatre(){
    this.getAllTheatreSub = this.theatreService.getTheatre(this.theatreId)
      .subscribe(theatre => {
        this.city = theatre[0].city.name
      })
  }

  getSelectedSeats(){
    this.selectedExecutiveSeatsList = JSON.parse(localStorage.getItem("selectedExecutiveSeatsList"));
    if(this.selectedExecutiveSeatsList != null){
      this.selectedExecutiveSeatsList.forEach(element => {
        this.executiveTotal += element.ticketPrice;
        this.seats.push(element.seatNo);
      })
    }

    this.selectedPremiumSeatsList = JSON.parse(localStorage.getItem("selectedPremiumSeatsList"));
    if(this.selectedPremiumSeatsList != null){
      this.selectedPremiumSeatsList.forEach(element => {
        this.premiumTotal += element.ticketPrice;
        this.seats.push(element.seatNo);
      })
    }

    this.selectedNormalSeatsList = JSON.parse(localStorage.getItem("selectedNormalSeatsList"));
    if(this.selectedNormalSeatsList != null){
      this.selectedNormalSeatsList.forEach(element => {
        this.normalTotal += element.ticketPrice;
        this.seats.push(element.seatNo);
      })
    }

    this.selectedReclinerSeatsList = JSON.parse(localStorage.getItem("selectedReclinerSeatsList"));
    if(this.selectedReclinerSeatsList != null){
      this.selectedReclinerSeatsList.forEach(element => {
        this.reclinerTotal += element.ticketPrice;
        this.seats.push(element.seatNo);
      })
    }

    this.totalAmount = this.executiveTotal + this.normalTotal + this.premiumTotal + this.reclinerTotal;

    console.log(this.seats);
  }

  addBookings(bookings: any): void {
    this.movieBookingsService.addMovieBooking(bookings)
      .subscribe();
  }

  doBooking(){
    let newBooking: any = {
      "movie": this.movieName,
      "userContact": this.userContact,
      "seatNo": this.seats,
      "theatre": this.theatre,
      "showTiming": this.showTime,
      "city": this.city,
      "language": this.language,
      "filmCategory": this.category,
      "dateToWatch": this.dateToWatch
    }

    console.log(newBooking);

    this.addBookings(newBooking);
    alert("Successfully completed booking, ticket has been send to you on email");

    localStorage.removeItem("selectedExecutiveSeatsList");
    localStorage.removeItem("selectedPremiumSeatsList");
    localStorage.removeItem("selectedNormalSeatsList");
    localStorage.removeItem("selectedReclinerSeatsList");

    this.router.navigate(['/bookinghistory']);
  }

  cancelBooking(){
    localStorage.removeItem("selectedExecutiveSeatsList");
    localStorage.removeItem("selectedPremiumSeatsList");
    localStorage.removeItem("selectedNormalSeatsList");
    localStorage.removeItem("selectedReclinerSeatsList");
  }

}
