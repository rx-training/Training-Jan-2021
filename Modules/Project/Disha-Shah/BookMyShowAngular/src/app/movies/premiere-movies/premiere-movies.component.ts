import { Component, OnChanges, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { LanguageService } from 'src/app/language.service';
import { IMovies } from 'src/app/models/IMovies';
import { GenreService } from '../genre.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-premiere-movies',
  templateUrl: './premiere-movies.component.html',
  styleUrls: ['./premiere-movies.component.css']
})
export class PremiereMoviesComponent implements OnInit {
  
  moviesList: Array<IMovies> = [];

  languagesList: Array<any> = [];
  
  genresList: Array<any> = [];

  getMovies(): void{
    this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter(x=>x.isPremiere == true),
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
  
  constructor(private service: MoviesService, private languageService: LanguageService, private genreService: GenreService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getLanguages();
    this.getGenres();
  }

}
