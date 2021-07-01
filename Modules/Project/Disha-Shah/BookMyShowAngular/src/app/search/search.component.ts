import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subject, Subscription } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
import { EventsService } from 'src/app/events/events.service';
import { IActivities } from 'src/app/models/IActivities';
import { IMovies } from 'src/app/models/IMovies';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  moviesList: Array<IMovies> = [];
  eventsList: Array<IActivities> = [];
  uniqueEventsList: Array<IActivities> = [];

  IsMovieFound: boolean = false;
  IsEventFound: boolean = false;
  IsResult: boolean = false;

  searchText: IMovies =  {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};

  getAllMoviesSub: Subscription;
  getAllEventsSub: Subscription;

  constructor(private service: MoviesService, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getEvents();
  }

  ngOnDestroy(){
    this.getMovies();
    this.getEvents();
  }

  getMovies(): void{
    this.getAllMoviesSub = this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies
    });  
  }

  getEvents(): void{
    this.getAllEventsSub = this.eventsService.getEvents()
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
  
}
