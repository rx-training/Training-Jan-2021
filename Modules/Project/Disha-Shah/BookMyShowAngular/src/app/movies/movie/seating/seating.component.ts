import { Component, ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/models/IMovies';
import { MoviesService } from '../../movies.service';
import * as $ from 'jquery';
import { MovieBookingsService } from '../../movie-bookings.service';
import { IMovieBookings } from 'src/app/models/IMovieBookings';
import { Subscription } from 'rxjs';

enum Seatcategory{
  Executive = 'Executive',
  Normal = 'Normal',
  Premium = 'Premium',
  Recliner = 'Recliner'  
}

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})

export class SeatingComponent implements OnInit, OnDestroy {

  movieName: string = '';
  movieId: number = 0;
  language: string = '';
  category: string = '';
  date: string = '';
  theatre: string = '';
  theatreId: number = 0;
  showTime: string = '';
  showTimeArray: Array<any> = [];
  noOfSeats: number = 0;
  movies: Array<IMovies> = [];
  movie: IMovies = {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};
  seatsCategories: Array<any> = [];
  uniqueSeatsCategories: Array<any> = [];
  seatsList: Array<any> = [];
  count: number = 0;
  selectedExecutiveSeatsList: Array<any> = [];
  selectedNormalSeatsList: Array<any> = [];
  selectedPremiumSeatsList: Array<any> = [];
  selectedReclinerSeatsList: Array<any> = [];
  bookButton: string = "none";
  bookInfo: string = "block";
  executiveTotal: number = 0;
  normalTotal: number = 0;
  premiumTotal: number = 0;
  reclinerTotal: number = 0;
  totalAmount: number = 0;
  screenId: number = 0;

  getAllMovieSub: Subscription;
  getAllSeatCategoriesSub: Subscription;
  getAllSeatsSub: Subscription;

  constructor(private route: ActivatedRoute, private service: MoviesService, private movieBookingsService: MovieBookingsService) { }

  ngOnInit(): void {
    this.getMovieInfo();
    this.getMovie();
    this.getSeats();
  }
  
  ngOnDestroy(){
    this.getAllMovieSub.unsubscribe();
    this.getAllSeatCategoriesSub.unsubscribe();
    this.getAllSeatsSub.unsubscribe();
  }

  getMovieInfo(){
    this.movieName = this.route.snapshot.paramMap.get('name');
    this.movieId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.language = this.route.snapshot.paramMap.get('language');
    this.category = this.route.snapshot.paramMap.get('category');
    this.date = this.route.snapshot.paramMap.get('date') + '-' + new Date().getFullYear();
    this.theatre = this.route.snapshot.paramMap.get('theatre');
    this.theatreId = parseInt(this.route.snapshot.paramMap.get('theatreId'));
    this.showTime = this.route.snapshot.paramMap.get('showTime');
    this.noOfSeats = parseInt(this.route.snapshot.paramMap.get('numberOfSeats'));
    this.showTimeArray = this.showTime.split(':');
  }

  getMovie(){
    this.getAllMovieSub = this.service.getMovie(this.movieId)
    .subscribe(movies => {
      this.movies = movies,
      this.movie = this.movies[0]
    })
  }

  getSeats(){
    this.getAllSeatCategoriesSub = this.service.getSeatsCategoryByShowTime(this.movieId, this.language, this.category, this.theatreId,this.showTime)
    .subscribe(seatsCategories => {
      this.seatsCategories = seatsCategories,
      this.uniqueSeatsCategories = this.seatsCategories.filter((thing, i, arr) => arr.findIndex(t => t.seatsCategoryId == thing.seatsCategoryId) == i),
      this.uniqueSeatsCategories.forEach(element => {
        this.getAllSeatsSub = this.service.getSeatsBySeatCategory(this.movieId, this.language, this.category, this.theatreId,this.showTime, element.seatCategory)
        .subscribe(seats => {
          this.seatsList.push(seats)
        })
      })
      console.log(this.seatsCategories)
      this.uniqueSeatsCategories.sort((a,b) => parseFloat(b.price) - parseFloat(a.price)),
      console.log(this.uniqueSeatsCategories)
    })
  }

  selectSeat(e: any, seatCategory: string, price: number, screenId: number){
    if(this.count != this.noOfSeats && !(e.target.classList.contains("disabled")) && !(e.target.classList.contains("btn-success"))){
      e.target.classList.add("btn-success");
      e.target.classList.remove("btn-outline-success");
      if(seatCategory == Seatcategory.Executive)
      {
        if(!localStorage.selectedExecutiveSeatsList){
          let selectedExecutiveSeat = [{
            category:seatCategory, 
            seatNo: e.target.innerText, 
            ticketPrice: price
          }]

          localStorage.setItem("selectedExecutiveSeatsList", JSON.stringify(selectedExecutiveSeat));
        }
        else{
          var selectedExecutiveSeatsArray = JSON.parse(localStorage.getItem("selectedExecutiveSeatsList"));
            var selectedExecutiveSeatsListDetails = {
              category:seatCategory, 
              seatNo: e.target.innerText, 
              ticketPrice: price
            }
            selectedExecutiveSeatsArray.push(selectedExecutiveSeatsListDetails);
            localStorage.setItem("selectedExecutiveSeatsList", JSON.stringify(selectedExecutiveSeatsArray));
        }
        this.executiveTotal += price;
      }
      else if(seatCategory == Seatcategory.Premium)
      {
        if(!localStorage.selectedPremiumSeatsList){
          let selectedPremiumSeat = [{
            category:seatCategory, 
            seatNo: e.target.innerText, 
            ticketPrice: price
          }]

          localStorage.setItem("selectedPremiumSeatsList", JSON.stringify(selectedPremiumSeat));
        }
        else{
          var selectedPremiumSeatsArray = JSON.parse(localStorage.getItem("selectedPremiumSeatsList"));
            var selectedPremiumSeatsListDetails = {
              category:seatCategory, 
              seatNo: e.target.innerText, 
              ticketPrice: price
            }
            selectedPremiumSeatsArray.push(selectedPremiumSeatsListDetails);
            localStorage.setItem("selectedPremiumSeatsList", JSON.stringify(selectedPremiumSeatsArray));
        }
        this.premiumTotal += price;
      }
      else if(seatCategory == Seatcategory.Normal)
      {
        if(!localStorage.selectedNormalSeatsList){
          let selectedNormalSeat = [{
            category:seatCategory, 
            seatNo: e.target.innerText, 
            ticketPrice: price
          }]

          localStorage.setItem("selectedNormalSeatsList", JSON.stringify(selectedNormalSeat));
        }
        else{
          var selectedNormalSeatsArray = JSON.parse(localStorage.getItem("selectedNormalSeatsList"));
            var selectedNormalSeatsListDetails = {
              category:seatCategory, 
              seatNo: e.target.innerText, 
              ticketPrice: price
            }
            selectedNormalSeatsArray.push(selectedNormalSeatsListDetails);
            localStorage.setItem("selectedNormalSeatsList", JSON.stringify(selectedNormalSeatsArray));
        }
        this.normalTotal += price;
      }
      else if(seatCategory == Seatcategory.Recliner)
      {
        if(!localStorage.selectedReclinerSeatsList){
          let selectedReclinerSeat = [{
            category:seatCategory, 
            seatNo: e.target.innerText, 
            ticketPrice: price
          }]

          localStorage.setItem("selectedReclinerSeatsList", JSON.stringify(selectedReclinerSeat));
        }
        else{
          var selectedReclinerSeatsArray = JSON.parse(localStorage.getItem("selectedReclinerSeatsList"));
            var selectedReclinerSeatsListDetails = {
              category:seatCategory, 
              seatNo: e.target.innerText, 
              ticketPrice: price
            }
            selectedReclinerSeatsArray.push(selectedReclinerSeatsListDetails);
            localStorage.setItem("selectedReclinerSeatsList", JSON.stringify(selectedReclinerSeatsArray));
        }
        this.reclinerTotal += price;
      }
      this.totalAmount += price;
      this.screenId = screenId;
      this.count++;
      if(this.count==this.noOfSeats){
        this.bookButton="block";
        this.bookInfo="none";
      }
      console.log(this.selectedExecutiveSeatsList)
    }
  }

  doLogin(){
    if(!localStorage.logged_in_user){
      localStorage.removeItem("selectedExecutiveSeatsList");
      localStorage.removeItem("selectedPremiumSeatsList");
      localStorage.removeItem("selectedNormalSeatsList");
      localStorage.removeItem("selectedReclinerSeatsList");
      alert("Please login to book your show");
    }
  }

}
