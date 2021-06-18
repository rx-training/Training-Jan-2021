import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GenreService } from '../genre.service';
import { IMovies } from '../../models/IMovies';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-recommended-movies',
  templateUrl: './recommended-movies.component.html',
  styleUrls: ['./recommended-movies.component.css']
})
export class RecommendedMoviesComponent implements OnInit {

  moviesList: Array<IMovies> = [];

  genresList: Array<any> = [];

  finalList: Array<IMovies> = [];
  
  getMovies(): void{
    this.service.getMovies()
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
    this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres
    }); 
  }

  constructor(private service: MoviesService, private genreService: GenreService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

}
