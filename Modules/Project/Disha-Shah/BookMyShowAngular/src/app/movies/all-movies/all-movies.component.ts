import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';
import { LanguageService } from 'src/app/language.service';
import { IMovies } from 'src/app/models/IMovies';
import { GenreService } from '../genre.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit, OnChanges {

  moviesList: Array<IMovies> = [];

  languagesList: Array<any> = [];
  
  genresList: Array<any> = [];

  genre: string = '';
  language: string = '';

  changeGenre(e: any) {
    console.log('choosed genre: ' + e.target.value);
    this.genre = e.target.value;
    this.filterRoute();
  }

  changeLanguage(e: any){
    console.log('choosed language: ' + e.target.value);
    this.language = e.target.value;
    this.filterRoute();
  }

  filterRoute(){
    if(this.genre == 'Choose Genre' && this.language == 'Choose Language')
    {
      this.router.navigate(['home/movies']);
      this.getMovies();
    }
    else if(this.genre != 'Choose Genre' || this.language != 'Choose Language'){
      this.router.navigate(['home/movies/filter'], {queryParams: {'genre': this.genre, 'language': this.language}});
      if(this.genre == 'Choose Genre' || this.genre == ''){
        this.getMoviesByLanguage(this.language);
      }
      else if(this.language == 'Choose Language' || this.language == ''){
        this.getMoviesByGenre(this.genre);
      }
      else{
        this.getMoviesByGenreLanguage(this.genre, this.language);
      }
    }
  }

  getMovies(): void{
    this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies,
      console.log(this.moviesList),
      this.moviesList.forEach(element => {
        console.log(element.movieLanguages);
        element.movieLanguages.forEach(e => {
          console.log(e.languageId);
          this.languagesList.forEach(g => {
            if(e.languageId == g.languageId){
              e.language=g.language1
            }
          })
          console.log(e);
        })
        element.movieGenres.forEach(e => {
          console.log(e.genreId);
          this.genresList.forEach(g => {
            if(e.genreId == g.genreId){
              e.genre=g.genre1
            }
          })
          console.log(e);
        })
      }),
      console.log(this.moviesList)
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages,
      console.log(this.languagesList);
    }); 
  }
  
  getGenres(): void{
    this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres,
      console.log(this.genresList);
    }); 
  }

  getMoviesByGenre(genre: string): void{
    this.service.getMoviesByGenre(genre)
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter((thing, i, arr) => arr.findIndex(t => t.movieId == thing.movieId) == i)
    }); 
  }

  getMoviesByLanguage(language: string): void{
    this.service.getMoviesByLanguage(language)
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter((thing, i, arr) => arr.findIndex(t => t.movieId == thing.movieId) == i)
    }); 
  }

  getMoviesByGenreLanguage(genre: string, language: string){
    this.service.getMoviesByGenreLanguage(genre, language)
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter((thing, i, arr) => arr.findIndex(t => t.movieId == thing.movieId) == i)
    }); 
  }

  constructor(private service: MoviesService, private languageService: LanguageService, private genreService: GenreService, private router: Router, private route: ActivatedRoute) { }

  ngOnChanges() {
    this.getMovies();
    this.getGenres();
    this.getLanguages();
  }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
    this.getLanguages();
  }

}
