import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from 'src/app/models/IMovies';
import { MoviesService } from '../../movies.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-seating',
  templateUrl: './seating.component.html',
  styleUrls: ['./seating.component.css']
})
export class SeatingComponent implements OnInit, OnChanges {

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
  selectedSeatsList: Array<any> = [];

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
    this.service.getMovie(this.movieId)
    .subscribe(movies => {
      this.movies = movies,
      this.movie = this.movies[0]
    })
  }

  getSeats(){
    this.service.getSeatsCategoryByShowTime(this.movieId, this.language, this.category, this.theatreId,this.showTime)
    .subscribe(seatsCategories => {
      this.seatsCategories = seatsCategories,
      this.uniqueSeatsCategories = this.seatsCategories.filter((thing, i, arr) => arr.findIndex(t => t.seatsCategoryId == thing.seatsCategoryId) == i),
      this.uniqueSeatsCategories.forEach(element => {
        this.service.getSeatsBySeatCategory(this.movieId, this.language, this.category, this.theatreId,this.showTime, element.seatCategory)
        .subscribe(seats => {
          this.seatsList.push(seats)
        })
      })
      console.log(this.seatsCategories)
      this.uniqueSeatsCategories.sort((a,b) => parseFloat(b.price) - parseFloat(a.price)),
      console.log(this.uniqueSeatsCategories)
    })
  }

  selectSeat(e: any){
    if(this.count != this.noOfSeats && !(e.target.classList.contains("disabled")) && !(e.target.classList.contains("btn-success"))){
      e.target.classList.add("btn-success");
      e.target.classList.remove("btn-outline-success");
      this.selectedSeatsList.push(e.target.innerText);
      this.count++;
    }
    console.log(this.selectedSeatsList)
  }

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnChanges(){
  }

  ngOnInit(): void {
    this.getMovieInfo();
    this.getMovie();
    this.getSeats();
  }

}
