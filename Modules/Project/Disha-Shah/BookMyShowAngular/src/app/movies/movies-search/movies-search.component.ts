import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { EventsService } from 'src/app/events/events.service';
import { IActivities } from 'src/app/models/IActivities';
import { IMovies } from 'src/app/models/IMovies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {

  moviesList: Array<IMovies> = [];
  eventsList: Array<IActivities> = [];
  uniqueEventsList: Array<IActivities> = [];

  IsMovieFound: boolean = false;
  IsEventFound: boolean = false;
  IsResult: boolean = false;

  searchText: IMovies =  {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};

  getMovies(): void{
    this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies
    });  
  }

  getEvents(): void{
    this.eventsService.getEvents()
    .subscribe(events => {
      this.eventsList = events
      this.uniqueEventsList = this.eventsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i)
    })
  }

  result(){
    this.moviesList.forEach(item => {
      if(item.name.toLowerCase().includes(this.searchText.name.toLowerCase())){
        this.IsMovieFound=true;
      }
    })

    this.uniqueEventsList.forEach(item => {
      if(item.event.toLowerCase().includes(this.searchText.name.toLowerCase())){
        this.IsEventFound=true;
      }
    })

    if(this.IsMovieFound==true || this.IsEventFound==true){
      this.IsResult = true;
    }
    else{
      this.IsResult = false;
    }

    this.IsEventFound = false;
    this.IsMovieFound = false;
  }

  constructor(private service: MoviesService, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getEvents();
  }
}
