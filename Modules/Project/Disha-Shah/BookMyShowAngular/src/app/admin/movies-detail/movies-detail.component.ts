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
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  movies: Array<IMovies> = [];
  movie: IMovies = {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};
  dateOfRelease: any;
  languagesList: Array<ILanguages> = [];
  genresList: Array<IGenres> = [];
  filmCategoriesList: Array<IFilmCategories> = [];
  castImagesList: Array<any> = [];
  castList: Array<any> = [];
  castNamesList: Array<any> = [];
  categoriesByLanguageList: Array<any> = [];

  getMovie(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.service.getMovie(id)
      .subscribe(movie => {
        this.movies = movie, 
        this.movies.forEach(element => {
          element.movieLanguages.forEach(e => {
            this.languagesList.forEach(g => {
              if(e.languageId == g.languageId){
                e.language=g.language1
              }
            })
            this.service.getFilmCategoriesByLanguages(id, e.language)
              .subscribe(categories => {
                this.categoriesByLanguageList.push(categories)
              })
            console.log(this.categoriesByLanguageList)
          })
          element.movieGenres.forEach(e => {
            this.genresList.forEach(g => {
              if(e.genreId == g.genreId){
                e.genre=g.genre1
              }
            })
          })
          element.movieFilmCategories.forEach(e => {
            this.filmCategoriesList.forEach(g => {
              if(e.filmCategoryId == g.filmCategoryId){
                e.filmCategories=g.filmCategory1
              }
            })
          })
        })
        console.log(this.movies), 
        this.movie = this.movies[0], 
        this.dateOfRelease = new Date(this.movie.dateOfRelease).getFullYear() + '-' + (new Date(this.movie.dateOfRelease).getMonth() + 1) + '-' + new Date(this.movie.dateOfRelease).getDate(),
        this.castImagesList = this.movie.castImages.split(','),
        this.castList = this.movie.cast.split(','),
        this.castList.forEach(element => {
          this.castNamesList.push(element.split('-'))
        })
        console.log(this.castImagesList),
        console.log(this.castNamesList)
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
    .subscribe((filmCategories: any[]) => {
      this.filmCategoriesList = filmCategories
    }); 
  }

  constructor(private service: MoviesService,
     private languageService: LanguageService,
     private genreService: GenreService, 
     private filmCategoryService: FilmCategoryService, 
     private route: ActivatedRoute, 
     private router: Router
     ) 
  { }

  ngOnInit(): void {
    this.getMovie();
    this.getLanguages();
    this.getGenres();
    this.getFilmCategories();
  }


}
