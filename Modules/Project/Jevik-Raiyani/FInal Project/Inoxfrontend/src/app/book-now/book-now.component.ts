import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovies } from '../services/IMovies';
import { IvCinemaScreen } from '../services/IvCinemaScreen';
import { IvDirectorCast } from '../services/IvDirectorCast';
import { MovieImages } from '../services/MovieImages';
import { MoviesService } from '../services/movies.service';
import { MovieTrailer } from '../services/MovieTrailer';
import { VCinemaScreenService } from '../services/v-cinema-screen.service';
import { VDirectorCastService } from '../services/vdirector-cast.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {

  DateNow =Date.now
  movieId;
  movieImages ;
  movieTrailer ;
  DateFlag : boolean


  thisMovieCast : IvDirectorCast[] = [];
  thisMovie : IMovies = null

  movieShow : IvCinemaScreen[] = [];
 
  BookyourSeat : IvCinemaScreen[] = []

  UniqueCity 
  UniqueCinema;
  

  constructor(private route:ActivatedRoute,
              private movieCast:VDirectorCastService,
              private movie:MoviesService,
              private show:VCinemaScreenService) { }

  ngOnInit(): void {
    this.movieId= parseInt(this.route.snapshot.paramMap.get('id'));
    this.movieImages = MovieImages.get(this.movieId)
    this.movieTrailer =MovieTrailer.get(this.movieId)

    this.movieCast.getAll().subscribe(data=>{
      this.thisMovieCast = data.filter(x=>x.movieId == this.movieId)
    })

    this.movie.getById(this.movieId).subscribe((data:IMovies)=>{
      this.thisMovie = data
      
      if(new Date().getTime() > new Date(this.thisMovie?.releaseDate).getTime()  )
      {
        this.DateFlag = true;
      }
    })

    this.show.getAll().subscribe(data=>{
      this.movieShow = data.filter(x=>x.movieId == this.movieId)
                            .filter(x=>new Date(x.date).getTime() + new Date(x.startTime.totalMilliseconds).getTime() 
                            >= new Date().getTime() + 21600000
                            ).sort((a,b)=>{
                              return new Date(a.startTime.milliseconds).getTime() - new Date(b.startTime.milliseconds).getTime();
                            }).sort((a,b)=>{
                              return new Date(a.date).getTime() - new Date(b.date).getTime();
                            })
     // console.log(this.movieShow)

      this.UniqueCity = this.uniqueByKey(this.movieShow, 'cinemaCity')
     // console.log(this.UniqueCity)

      
    })  


     
  }
  uniqueByKey(array, key) {
    return [...new Map(array.map((x) => [x[key], x])).values()];
  }


  onSelect(city){
    this.UniqueCinema = this.movieShow.filter(x=>x.cinemaCity == city)
   // console.log(this.UniqueCinema)
    this.UniqueCinema = this.uniqueByKey(this.UniqueCinema, 'cinemaName')
  }

  onSelectCinema(cinema){
    this.BookyourSeat = this.movieShow.filter(o1 => this.UniqueCinema.some(o2 => o1.cinemaCity === o2.cinemaCity) &&
                                              o1.cinemaName == cinema );

    // for (const i of this.BookyourSeat) {
    //   //console.log(i.showTimeId)
    // }
    //console.log(this.BookyourSeat)
    
  }

  
  

}
