import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { PastDateValidator } from 'src/app/Validators/PastDateValidator';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  certificationsList: Array<ICertifications> = [];
  genresList: Array<IGenres> = [];
  languagesList: Array<ILanguages> = [];
  filmCategoriesList: Array<IFilmCategories> = [];
  moviesList: Array<IMovies> = [];
  lastMovieId: number = 0;

  addMovieForm;
  movieImage: string = "";
  movieBgImage: string = "";
  casts: Array<any> = [];
  castImages: Array<any> = [];

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
    this.movieImage = e.target.value.split('\\')[2];
  }

  getBgImage(e: any){
    console.log(e.target.value.split('\\')[2]);
    this.movieBgImage = e.target.value.split('\\')[2];
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

  getCastsGroup(i: number){
    return <FormGroup>(<FormArray>this.addMovieForm.get('cast')).get(i.toString());
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
  
  constructor(
    private fb: FormBuilder, 
    private moviesService: MoviesService, 
    private certificationService: CertificationService,
    private genresService: GenreService,
    private languagesService: LanguageService,
    private filmCategoriesService: FilmCategoryService
    ) { 
    this.addMovieForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      time:  ['', Validators.compose([Validators.required])],
      image: ['', Validators.required],
      dateOfRelease: ['', Validators.compose([Validators.required, PastDateValidator()])],
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
      genres: this.fb.array([], Validators.required),
      languages: this.fb.array([], Validators.required),
      filmCategories: this.fb.array([], Validators.required)
    });
  }
  ngOnInit(): void {
    this.getCertifications();
    this.getGenres();
    this.getLanguages();
    this.getFilmCategories();
  }

}
