import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IFilmCategories } from 'src/app/models/IFilmCategories';
import { IGenres } from 'src/app/models/IGenres';
import { ILanguages } from 'src/app/models/ILanguages';
import { IMovies } from 'src/app/models/IMovies';
import { FilmCategoryService } from '../../film-category.service';
import { GenreService } from '../../genre.service';
import { MoviesService } from '../../movies.service';

@Component({
  selector: 'app-select-show-time',
  templateUrl: './select-show-time.component.html',
  styleUrls: ['./select-show-time.component.css']
})
export class SelectShowTimeComponent implements OnInit, OnDestroy {

  movies: Array<IMovies> = [];
  movie: IMovies = {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};
  dateOfRelease: any;
  genresList: Array<IGenres> = [];
  castImagesList: Array<any> = [];
  theatres: Array<any> = [];
  language: string = '';
  category: string = '';
  datesList: Array<any> = [];

  constructor(
    private service: MoviesService,
    private genreService: GenreService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getTheatres();
    this.getMovie();
    this.getGenres();
    this.setTheatres();
  }

  ngOnDestroy(){
    this.getTheatres();
    this.getMovie();
    this.getGenres();
    this.setTheatres();
  }
  
  getMovie(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    const language = this.route.snapshot.paramMap.get('language')!;
    const category = this.route.snapshot.paramMap.get('category')!;
    this.service.getMovie(id)
    .subscribe(movies => {
      this.movies = movies,
      this.movie = this.movies[0],
      this.movies.forEach(element => {
        element.movieGenres.forEach(e => {
          this.genresList.forEach(g => {
            if(e.genreId == g.genreId){
              e.genre=g.genre1
            }
          })
        })
      }),
      this.dateOfRelease = new Date(this.movie.dateOfRelease).getFullYear() + '-' + (new Date(this.movie.dateOfRelease).getMonth() + 1) + '-' + new Date(this.movie.dateOfRelease).getDate(),
      this.castImagesList = this.movie.castImages.split(',').slice(0,3)
    })
  }

  getGenres(): void{
    this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres
    }); 
  }

  getTheatres(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    const language = this.route.snapshot.paramMap.get('language')!;
    const category = this.route.snapshot.paramMap.get('category')!;
    this.service.getTheatresBySelectedMovieCategory(id, language, category)
      .subscribe(theatres => {
        this.theatres = theatres,
        console.log(this.theatres),
        this.language = language,
        this.category = category,
        this.datesList.push(new Date().getDate() + '-' + (new Date().getMonth() + 1)),
        this.datesList.push((new Date().getDate() + 1) + '-' + (new Date().getMonth() + 1)),
        this.datesList.push((new Date().getDate() + 2) + '-' + (new Date().getMonth() + 1)),
        this.datesList.push((new Date().getDate() + 3) + '-' + (new Date().getMonth() + 1))
      });
  }

  setTheatres(){
    this.service.setTheatres(this.theatres, this.movie.movieId);
  }

}
