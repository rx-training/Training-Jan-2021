import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { CinemasService } from '../services/cinemas.service';
import { IMovies } from '../services/IMovies';
import { IvDirectorCast } from '../services/IvDirectorCast';
import { MovieImages } from '../services/MovieImages';
import { MoviesService } from '../services/movies.service';
import { MovieTrailer } from '../services/MovieTrailer';
import { ScreensService } from '../services/screens.service';
import { ShowTimmeService } from '../services/show-timme.service';
import { VCinemaScreenService } from '../services/v-cinema-screen.service';
import { VDirectorCastService } from '../services/vdirector-cast.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

  TotalCinema
  TotalShow
  UniqueCity
  UniqueCinema
  Movies
  totalShowOfCinema
  perticularCinemaScreens
  AddscreenId: number

  thisMovieCast: IvDirectorCast[] = [];
  thisMovie: IMovies = null

  totalMovies
  checkFlag: boolean = true
  AddshowFlag: boolean = false
  DateFlag: boolean = false
  movieImages;
  movieTrailer;

  cinemaId: number
  CinemaCity: string
  CinemaName: string
  addMovieId: number
  date: Date
  time: Date
  TotalScreenOfCinema

  cinemaAdmin: boolean = false

  constructor(private show: VCinemaScreenService,
    private moiveService: MoviesService,
    private cinemaService: CinemasService,
    private auth: AuthService,
    private showTimeService: ShowTimmeService,
    private screenServivce: ScreensService,
    private movieCast: VDirectorCastService) { }

  ngOnInit(): void {
    this.auth.GmailVerificationCinemaAdmin(localStorage.getItem('userGmail')).subscribe(data => {
      if (data.status = 'Success') {
        this.cinemaAdmin = true
        // console.log(this.cinemaAdmin)
      }
    },
      err => {
        //console.log('Unathorized')
      })



    this.cinemaService.getAll().subscribe(data => {
      this.TotalCinema = data
      this.UniqueCity = this.uniqueByKey(data, 'cinemaCity')
      //console.log(this.UniqueCity)
    })
    this.show.getAll().subscribe(data => {
      this.TotalShow = data
    })
    this.screenServivce.getAll().subscribe(data => {
      this.TotalScreenOfCinema = data
      //console.log(this.TotalScreenOfCinema)
    })


  }

  uniqueByKey(array, key) {
    return [...new Map(array.map((x) => [x[key], x])).values()];
  }


  onSelect(city) {

    this.CinemaCity = city
    this.UniqueCinema = this.TotalCinema.filter(x => x.cinemaCity == city)
    this.UniqueCinema = this.uniqueByKey(this.UniqueCinema, 'cinemaName')
    //console.log(this.UniqueCinema)
  }

  onSelectCinema(name) {
    this.CinemaName = name
    this.Movies = this.TotalShow.filter(x => x.cinemaCity == this.CinemaCity && x.cinemaName == name)
    //console.log(this.Movies)
    // this.Movies = this.TotalShow.filter(o1 => this.UniqueCinema.some(o2 => o1.cinemaCity === o2.cinemaCity) &&
    //   o1.cinemaName == name);

    this.cinemaService.getAll().subscribe(data => {

      this.cinemaId = data.filter(x => x.cinemaCity === this.CinemaCity && x.cinemaName == name)[0].cinemaId
     // console.log(this.cinemaId)
      this.perticularCinemaScreens = this.TotalScreenOfCinema.filter(x => x.cinemaId == this.cinemaId)
     // console.log(this.perticularCinemaScreens)

    })




    this.totalShowOfCinema = this.Movies
      .filter(x => new Date(x.date).getTime() + new Date(x.startTime.totalMilliseconds).getTime()
        >= new Date().getTime() + 21600000
      ).sort((a, b) => {
        return new Date(a.startTime.milliseconds).getTime() - new Date(b.startTime.milliseconds).getTime();
      }).sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      })

    this.Movies = this.uniqueByKey(this.Movies, 'movieId')

    this.moiveService.getAll().subscribe(data => {
      this.totalMovies = data
        .sort((a, b) => {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        });

      this.Movies = data.filter(o1 => this.Movies.some(o2 => o2.movieId == o1.movieId))
        .sort((a, b) => {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        });
    })
    // console.log(this.Movies)
  }

  changeCheckbox(val) {
    //console.log(val)
    if (val == "add") {
      this.checkFlag = true
      // console.log(this.checkFlag)
    } else {
      this.checkFlag = false
      // console.log(this.checkFlag)
    }
  }

  deleteShow(id) {
    this.showTimeService.delete(id).subscribe(data => {
      alert('Show Deleted')
      window.location.reload()
    },
      err => {
        alert('Some sits are booked')
      }
    )
  }
  AddShow(id) {
    this.movieImages = MovieImages.get(id)
    this.movieTrailer = MovieTrailer.get(id)
    
    this.addMovieId = id

    this.moiveService.getById(id).subscribe((data: IMovies) => {
      this.thisMovie = data

      if (new Date().getTime() > new Date(this.thisMovie?.releaseDate).getTime()) {
        this.DateFlag = true;
      }
     

      this.movieCast.getAll().subscribe(data => {
        this.thisMovieCast = data.filter(x => x.movieId == id)
      })

    })
  }
  onSelectScreen(id) {
    this.AddscreenId = id
    //console.log(this.AddscreenId)
  }

  back() {
    this.addMovieId = undefined
  }

  addNewShow() {
   // console.log(this.AddscreenId)
    if (this.AddscreenId == undefined) {
      alert('choose screen number')
      return
    }
    if (this.date == undefined) {
      alert('Enter date')
      return
    }
    if (new Date(this.date).getFullYear().toString().length != 4) {
      alert('Enter valid Date')
      return
    }

  if (new Date(new Date(this.date).toJSON().slice(0, 10).replace(/-/g, '/')).getTime()
      <= new Date(new Date(this.thisMovie.releaseDate).toJSON().slice(0, 10).replace(/-/g, '/')).getTime()) {
      alert('Show Date must be after release')
      return
    }

    if (new Date(new Date(this.date).toJSON().slice(0, 10).replace(/-/g, '/')).getTime()
      <= new Date(new Date().toJSON().slice(0, 10).replace(/-/g, '/')).getTime()) {
      alert('You can add next day show')
      return
    }

    if (this.time == undefined) {
      alert('Enter ShowTime')
      return
    }
    if (this.time.toString().length != 5) {
      alert('Enter valid ShowTime')
      return
    }
    // console.log(new Date().getTime())
    // console.log(parseInt( this.time.toString().slice(0,2)))
    // console.log(parseInt( this.time.toString().slice(3,5)))

    // console.log(new Date( new Date(this.date)
    //                         .setHours(parseInt( this.time.toString().slice(0,2))))
    //                         .setMinutes(  parseInt( this.time.toString().slice(3,5)) ))

    if (new Date(new Date(this.date)
      .setHours(parseInt(this.time.toString().slice(0, 2))))
      .setMinutes(parseInt(this.time.toString().slice(3, 5)))
      <
      new Date().getTime() + 86400000) {
      alert('You can Create show that contain Datetime after 24hours from now')
    }

    this.showTimeService.create({
      movieId: this.addMovieId,
      screenId: this.AddscreenId,
      date: this.date,
      startTime: {
        hours: parseInt(this.time.toString().slice(0, 2)),
        minutes: parseInt(this.time.toString().slice(3, 5))
      }
    }).subscribe(data => {
      alert('Show Added')
      window.location.reload();
    },
      err => {
        alert('already show on this Date Time & this Screen')
      }
    )
  }


  getMovieImages(id) {
    return MovieImages.get(id)
  }
}
