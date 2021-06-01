import { Component, OnInit } from '@angular/core';
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
  
  // getMovies(): void{
  //   this.service.getMovies()
  //   .subscribe((movies: any[]) => {
  //     this.moviesList = movies.filter(x=>x.isRecommended == true),
  //     console.log(this.moviesList), 
  //     this.uniqueMoviesList = this.moviesList.filter((thing, i, arr) => arr.findIndex(t => t.movieId == thing.movieId) == i),
  //     console.log(this.uniqueMoviesList),
  //     this.uniqueMoviesList.forEach(element => {
  //       console.log(element);
  //       this.moviesList.forEach(item => {
  //         console.log(item);
  //         if(element.movieId == item.movieId){
  //           console.log(item.genre);
  //           this.genres.push(item.genre);
  //           console.log(this.genres);
  //         }
  //       })

  //       console.log(this.genres)
  //       this.genresList.push(this.genres);
  //       this.genres = [];
  //     }),
  //     //this.genres = this.moviesList.map(item => item.genre).filter((value, index, self) => self.indexOf(value) == index),
  //     console.log(this.genres),
  //     // this.genresList.filter((thing, i, arr) => arr.findIndex(t => t. == thing.movieId) == i),
  //     console.log(this.genresList)
  //   });  
  // }

  getMovies(): void{
    this.service.getMovies()
    .subscribe((movies: any[]) => {
      this.moviesList = movies.filter(x=>x.isRecommended == true),
      console.log(this.moviesList),
      this.moviesList.forEach(element => {
        console.log(element.movieGenres);
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
      console.log(this.moviesList),
      this.finalList = this.moviesList.slice(0,10),
      console.log(this.finalList)
    });  
  }

  getGenres(): void{
    this.genreService.getGenres()
    .subscribe((genres: any[]) => {
      this.genresList = genres,
      console.log(this.genresList);
    }); 
  }

  constructor(private service: MoviesService, private genreService: GenreService) { 
    
  }

  ngOnInit(): void {
    this.getMovies();
    this.getGenres();
  }

}
