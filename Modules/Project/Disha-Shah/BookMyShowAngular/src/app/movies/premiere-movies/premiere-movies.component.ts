import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/language.service';
import { IMovies } from 'src/app/models/IMovies';
import { GenreService } from '../genre.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-premiere-movies',
  templateUrl: './premiere-movies.component.html',
  styleUrls: ['./premiere-movies.component.css']
})
export class PremiereMoviesComponent implements OnInit, OnDestroy {
  
  moviesList: Array<IMovies> = [];

  finalList: Array<IMovies> = [];

  languagesList: Array<any> = [];
  
  genresList: Array<any> = [];

  getAllMoviesSub: Subscription;
  getAllLanguagesSub: Subscription;
  getAllGenresSub: Subscription;

  constructor(private service: MoviesService, private languageService: LanguageService, private genreService: GenreService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getLanguages();
    this.getGenres();
  }

  ngOnDestroy(){
    this.getAllMoviesSub.unsubscribe();
    this.getAllLanguagesSub.unsubscribe();
    this.getAllGenresSub.unsubscribe();
  }

  getMovies(): void{
    this.getAllMoviesSub = this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter(x=>x.isPremiere == true),
      this.moviesList.forEach(element => {
        element.movieLanguages.forEach(e => {
          this.languagesList.forEach(g => {
            if(e.languageId == g.languageId){
              e.language=g.language1
            }
          })
        })
        element.movieGenres.forEach(e => {
          this.genresList.forEach(g => {
            if(e.genreId == g.genreId){
              e.genre=g.genre1
            }
          })
        })
      }),
      this.finalList = this.moviesList.slice(0,10)
    });  
  }

  getLanguages(): void{
    this.getAllLanguagesSub = this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }
  
  getGenres(): void{
    this.getAllGenresSub = this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres
    }); 
  }

}
