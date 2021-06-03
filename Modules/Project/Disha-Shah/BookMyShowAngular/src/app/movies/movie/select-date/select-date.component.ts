import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styleUrls: ['./select-date.component.css']
})
export class SelectDateComponent implements OnInit, OnChanges {

  theatres: Array<any> = [];
  uniqueTheatres: Array<any> = [];
  showTimings: Array<any> = [];
  movieId: number = 0;
  isOnTerms: boolean = false;
  isOnSeats: boolean = false;
  numberOfSeats: number = 1;
  movieName: string = '';
  language: string = '';
  category: string = '';
  date: any;
  theatre: string = '';
  theatreId: number = 0;
  showTime: any;
  seatsCategories: Array<any> = [];
  uniqueSeatsCategories: Array<any> = [];
  executiveSeats: Array<any> = [];
  isExecutiveAvailable = true;
  normalSeats: Array<any> = [];
  isNormalAvailable = true;
  premiumSeats: Array<any> = [];
  isPremiumAvailable = true;
  reclinerSeats: Array<any> = [];
  isReclinerAvailable = true;

  getTheatresInfo(){
    this.theatres = this.service.getTheatres();
    this.movieId = this.service.getMovieId();
    console.log(this.theatres);
    this.uniqueTheatres = this.theatres.filter((thing, i, arr) => arr.findIndex(t => t.theatreId == thing.theatreId) == i);
    console.log(this.uniqueTheatres);
    this.uniqueTheatres.forEach(element => {
      this.service.getShowTimingsByTheatre(this.movieId, element.language, element.filmCategory, element.theatreId)
        .subscribe(showTimings => {
          this.showTimings.push(showTimings),
          console.log(this.showTimings),
          this.movieName = element.movie,
          this.language = element.language,
          this.category = element.filmCategory
        })
    })
  }

  terms(theatre: string, theatreId: number, showTime: any){
    this.isOnTerms = true;
    this.isOnSeats = false;
    this.theatre = theatre;
    this.theatreId = theatreId;
    this.showTime = showTime.hours + ':' + showTime.minutes;
    console.log(this.showTime);
    this.date = this.route.snapshot.paramMap.get('date'),
    console.log(this.date)
  }

  seats(){
    this.isOnSeats = true;
    this.isOnTerms = false;
    this.service.getSeatsCategoryByShowTime(this.movieId, this.language, this.category, this.theatreId,this.showTime)
    .subscribe(seatsCategories => {
      this.seatsCategories = seatsCategories,
      this.uniqueSeatsCategories = this.seatsCategories.filter((thing, i, arr) => arr.findIndex(t => t.seatsCategoryId == thing.seatsCategoryId) == i),
      this.seatsCategories.forEach(element => {
        if(element.seatCategory == "Executive"){
          this.executiveSeats.push(element);
        }
        else if(element.seatCategory == "Normal"){
          this.normalSeats.push(element);
        }
        else if(element.seatCategory == "Premium"){
          this.premiumSeats.push(element);
        }
        else if(element.seatCategory == "Recliner"){
          this.reclinerSeats.push(element);
        }
      })

      let executiveBooked = 0;
      let normalBooked = 0;
      let premiumBooked = 0;
      let reclinerBooked = 0;
      this.executiveSeats.forEach(element => {
        if(element.isBooked == true){
          executiveBooked++;
        }
      })
      this.normalSeats.forEach(element => {
        if(element.isBooked == true){
          normalBooked++;
        }
      })
      this.premiumSeats.forEach(element => {
        if(element.isBooked == true){
          premiumBooked++;
        }
      })
      this.reclinerSeats.forEach(element => {
        if(element.isBooked == true){
          reclinerBooked++;
        }
      })

      if(executiveBooked >= Math.floor(this.executiveSeats.length/2))
      {
        this.isExecutiveAvailable = false
      }
      if(normalBooked >= Math.floor(this.normalSeats.length/2))
      {
        this.isNormalAvailable = false
      }
      if(premiumBooked >= Math.floor(this.premiumSeats.length/2))
      {
        this.isPremiumAvailable = false
      }
      if(reclinerBooked >= Math.floor(this.reclinerSeats.length/2))
      {
        this.isReclinerAvailable = false
      }
      
      console.log(this.executiveSeats.length)
      console.log(Math.floor(this.executiveSeats.length/2))
      console.log(executiveBooked)
    })
  }

  noOfSeats(e: any){
    this.numberOfSeats = e.target.value;
  }

  constructor(
    private service: MoviesService,
    private route: ActivatedRoute
  ) { }

  ngOnChanges(){
    this.getTheatresInfo();
  }

  ngOnInit(): void {
    this.getTheatresInfo();
  }
}
