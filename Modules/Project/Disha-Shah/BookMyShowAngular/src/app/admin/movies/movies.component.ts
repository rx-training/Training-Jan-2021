import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IFilmCategories } from 'src/app/models/IFilmCategories';
import { IGenres } from 'src/app/models/IGenres';
import { ILanguages } from 'src/app/models/ILanguages';
import { IMovies } from 'src/app/models/IMovies';
import { FilmCategoryService } from 'src/app/movies/film-category.service';
import { GenreService } from 'src/app/movies/genre.service';
import { MoviesService } from 'src/app/movies/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  moviesList: Array<IMovies> = [];

  languagesList: Array<any> = [];
  
  genresList: Array<any> = [];

  filmCategoryList: Array<any> = [];

  castImagesList: Array<any> = [];

  getMovies(): void{
    this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies,
      this.moviesList.forEach(element => {
        element.movieLanguages.forEach(e => {
          this.languagesList.forEach(g => {
            if(e.languageId == g.languageId){
              e.language=g.language1
            }
          })
        }),
        element.movieFilmCategories.forEach(e => {
          this.filmCategoryList.forEach(g => {
            if(e.filmCategoryId == g.filmCategoryId){
              e.filmCategory=g.filmCategory1
            }
          })
        }),
        element.movieGenres.forEach(e => {
          this.genresList.forEach(g => {
            if(e.genreId == g.genreId){
              e.genre=g.genre1
            }
          })
        })
      }),
      console.log(this.moviesList),

      this.moviesList.forEach(item => {
        this.castImagesList.push(item.castImages.split(','))
      })

    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }
  
  getGenres(): void{
    this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres
    }); 
  }

  getFilmCategories(): void{
    this.filmCategoryService.getFilmCategories()
    .subscribe(filmCategories => {
      this.filmCategoryList = filmCategories,
      console.log(this.filmCategoryList)
    })
  }

  removeMovie(id: number){
    this.moviesList = this.moviesList.filter(h => h.movieId !== id);
    this.service.deleteMovie(id).subscribe();
  }
  
  constructor(private service: MoviesService, private languageService: LanguageService, private genreService: GenreService, private filmCategoryService: FilmCategoryService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getLanguages();
    this.getGenres();
    this.getFilmCategories();
  }
}
