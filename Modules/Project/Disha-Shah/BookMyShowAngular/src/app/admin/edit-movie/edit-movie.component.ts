import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { ICertifications } from 'src/app/models/ICertifications';
import { IFilmCategories } from 'src/app/models/IFilmCategories';
import { IGenres } from 'src/app/models/IGenres';
import { ILanguages } from 'src/app/models/ILanguages';
import { IMovies } from 'src/app/models/IMovies';
import { CertificationService } from 'src/app/movies/certification.service';
import { FilmCategoryService } from 'src/app/movies/film-category.service';
import { GenreService } from 'src/app/movies/genre.service';
import { MoviesService } from 'src/app/movies/movies.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit, OnChanges {

  certificationsList: Array<ICertifications> = [];
  genresList: Array<IGenres> = [];
  languagesList: Array<ILanguages> = [];
  filmCategoriesList: Array<IFilmCategories> = [];
  moviesList: Array<IMovies> = [];
  lastMovieId: number = 0;

  selectedFilmCategories: Array<string> = [];

  addMovieForm;
  movieImage: string = "";
  movieBgImage: string = "";
  casts: Array<any> = [];
  castImages: Array<any> = [];


  movies: Array<IMovies> = [];
  movie: IMovies = {about: '', isRecommended: false, movieFilmCategories: [], movieLanguages: [], name: '', time: '', movieId: 0, screensMovies: [], backgroundImage: '', cast: '', castImages: '', certification: '', certificationId: 0, dateOfRelease: new Date(), image: '', isPremiere: false, movieGenres: []};

  getCertifications(){
    this.certificationService.getCertifications()
    .subscribe(certifications => {
      this.certificationsList = certifications
    })
  }

  getGenres(){
    this.genresService.getGenres()
    .subscribe(genres => {
      this.genresList = genres
    })
  }

  getLanguages(){
    this.languagesService.getLanguages()
    .subscribe(languages => {
      this.languagesList = languages
    })
  }

  getFilmCategories(){
    this.filmCategoriesService.getFilmCategories()
    .subscribe(filmCategories => {
      this.filmCategoriesList = filmCategories
    })
  }

  movieSubmit(){
    console.log(this.addMovieForm.value)
    this.addMovieForm.value.cast.forEach(item => {
      this.casts.push(item.actor + '-' + item.character)
    })
    console.log(this.casts)

    var newMovie: any = {
      "name": this.addMovieForm.value.name,
      "time": this.addMovieForm.value.time,
      "image": "images/" + this.movieImage,
      "dateOfRelease": this.addMovieForm.value.dateOfRelease,
      "about": this.addMovieForm.value.about,
      "certification": this.addMovieForm.value.certification,
      "isRecommended": this.addMovieForm.value.isRecommended,
      "isPremiere": this.addMovieForm.value.isPremiere,
      "backgroundImage": "images/" + this.movieBgImage,
      "cast": this.casts.join(','),
      "castImages": this.castImages.join(','),
      "genres": this.addMovieForm.value.genres,
      "languages": this.addMovieForm.value.languages,
      "filmCategories": this.addMovieForm.value.filmCategories
    }

    console.log(newMovie);
    this.addMovie(newMovie);

    alert("Movie added successfully");

    this.addMovieForm.reset();

    window.location.reload();
  }

  addMovie(newMovie: any): void {
    this.moviesService.addMovie(newMovie)
    .subscribe();
  }

  getImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.movieImage = "images/" + e.target.value.split('\\')[2];
  }

  getBgImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.movieBgImage = "images/" + e.target.value.split('\\')[2];
  }

  getCastImage(i: number, e: any){
    this.castImages[i] = "images/" + e.target.value.split('\\')[2];
    console.log(this.castImages);
  }

  // getter for emergency contacts as array
  get getCasts(){
    return this.addMovieForm.get('cast') as FormArray;
  }

  // add new emergency contact form group
  addCasts(){
    this.getCasts.push(this.fb.group({
      actor: ['', Validators.compose([Validators.required])],
      character: ['', Validators.compose([Validators.required])],
      image: ['', Validators.compose([Validators.required])]
    }));
  }

  selectGenre(i: number, e: any){
    const genres: FormArray = this.addMovieForm.get('genres') as FormArray;

    if (e.target.checked) {

      genres.push(new FormControl(e.target.value));

    } else {

       const index = genres.controls.findIndex(x => x.value === e.target.value);

       genres.removeAt(index);

    }
  }

  selectLanguage(i: number, e: any){
    const languages: FormArray = this.addMovieForm.get('languages') as FormArray;

    if (e.target.checked) {

      languages.push(new FormControl(e.target.value));

    } else {

       const index = languages.controls.findIndex(x => x.value === e.target.value);

       languages.removeAt(index);

    }
  }

  selectFilmCategory(i: number, e: any){
    const filmCategories: FormArray = this.addMovieForm.get('filmCategories') as FormArray;

    if (e.target.checked) {

      filmCategories.push(new FormControl(e.target.value));

    } else {

       const index = filmCategories.controls.findIndex(x => x.value === e.target.value);

       filmCategories.removeAt(index);

    }
  }

  getMovie(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.moviesService.getMovie(id)
    .subscribe(movies => {
      this.movies = movies,
      this.movies.forEach(element => {
        element.movieLanguages.forEach(e => {
          this.languagesList.forEach(g => {
            if(e.languageId == g.languageId){
              e.language=g.language1
            }
          })
        }),
        element.movieFilmCategories.forEach(e => {
          this.filmCategoriesList.forEach(g => {
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
      this.movie = this.movies[0],
      this.movie.movieFilmCategories.forEach(item => {
        this.selectedFilmCategories.push(item.filmCategory)
      }),
      console.log(this.selectedFilmCategories),
      console.log(this.movie),
      this.addMovieForm.patchValue({
        name: this.movie.name,
        time:  this.movie.time,
        image: this.movie.image,
        dateOfRelease: this.datepipe.transform(this.movie.dateOfRelease, 'yyyy-MM-dd'), //new Date(new Date(this.movie.dateOfRelease).getFullYear() + "-" + (new Date(this.movie.dateOfRelease).getMonth() + 1) + "-" + new Date(this.movie.dateOfRelease).getDate()),
        about: this.movie.about,
        certification: this.movie.certification.certification1,
        isRecommended: this.movie.isRecommended,
        isPremiere: this.movie.isPremiere,
        backgroundImage: this.movie.backgroundImage
      });

      this.movieImage = this.addMovieForm.value.image
      this.movieBgImage = this.addMovieForm.value.backgroundImage
    })
  }
  
  constructor(
    private fb: FormBuilder, 
    private moviesService: MoviesService, 
    private certificationService: CertificationService,
    private genresService: GenreService,
    private languagesService: LanguageService,
    private filmCategoriesService: FilmCategoryService,
    private route: ActivatedRoute,
    private datepipe: DatePipe
    ) { 
    this.addMovieForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      time:  ['', Validators.compose([Validators.required])],
      image: ['', Validators.required],
      dateOfRelease: ['', Validators.required],
      about: ['', Validators.required],
      certification: ['', Validators.required],
      isRecommended: [false, Validators.required],
      isPremiere: [false, Validators.required],
      backgroundImage: ['', Validators.required],
      cast: this.fb.array([
        this.fb.group({
          actor: ['', Validators.compose([Validators.required])],
          character: ['', Validators.compose([Validators.required])],
          image: ['', Validators.compose([Validators.required])]
        })
      ]),
      genres: this.fb.array([]),
      languages: this.fb.array([]),
      filmCategories: this.fb.array([])
    });
  }

  ngOnChanges(){
    console.log("hello");

    
  }

  ngOnInit(): void {
    this.getCertifications();
    this.getGenres();
    this.getLanguages();
    this.getFilmCategories();
    this.getMovie();

  }

}
