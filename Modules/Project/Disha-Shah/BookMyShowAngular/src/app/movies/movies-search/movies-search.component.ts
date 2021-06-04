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

  // heroes$!: Observable<IMovies[]>;
  
  // private searchTerms = new Subject<string>();

  // constructor(private heroService: MoviesService) {}

  // // Push a search term into the observable stream.
  // search(term: string): void {
  //   this.searchTerms.next(term);
  // }

  // ngOnInit(): void {
  //   this.heroes$ = this.searchTerms.pipe(
  //     // wait 300ms after each keystroke before considering the term
  //     debounceTime(300),

  //     // ignore new term if same as previous term
  //     distinctUntilChanged(),

  //     // switch to new search observable each time the term changes
  //     switchMap((term: string) => this.heroService.searchHeroes(term)),
  //   );
  // }

  moviesList: Array<IMovies> = [];
  eventsList: Array<IActivities> = [];
  uniqueEventsList: Array<IActivities> = [];

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

  constructor(private service: MoviesService, private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getMovies();
    this.getEvents();
  }
}
