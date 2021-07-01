import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { IMovies } from '../../models/IMovies';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit, OnDestroy {

  moviesList: Array<IMovies> = [];

  genresList: Array<any> = [];

  finalList: Array<IMovies> = [];

  getAllMoviesSub: Subscription;
  getAllGenresSub: Subscription;

  constructor(private service: MoviesService, private genreService: GenreService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

  ngOnDestroy(){
    this.getAllMoviesSub.unsubscribe();
    this.getAllGenresSub.unsubscribe();
  }
  
  getMovies(): void{
    this.getAllMoviesSub = this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter(x=>x.isRecommended == true),
      this.moviesList.forEach(element => {
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

  getGenres(): void{
    this.getAllGenresSub = this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres
    }); 
  }

}
