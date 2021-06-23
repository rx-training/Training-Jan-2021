import { Component, OnChanges, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
import { PastDateValidator } from 'src/app/Validators/PastDateValidator';

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
  selectedLanguages: Array<string> = [];
  selectedGenres: Array<string> = [];

  addMovieForm;
  movieImage: string = "";
  movieBgImage: string = "";
  casts: Array<any> = [];
  castImages: Array<any> = [];

  id: number = 0;
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
    console.log(this.movieImage)
    console.log(this.movieBgImage)

    let selectedGenres: Array<string> = [];
    let selectedLanguages: Array<string> = [];
    let selectedCategories: Array<string> = [];

    this.genresList.forEach(element => {
      const ele = document.getElementById(element.genre1) as unknown as HTMLInputElement;
      if(ele.checked == true){
        selectedGenres.push(ele.value)
      }
    })

    this.languagesList.forEach(element => {
      const ele = document.getElementById(element.language1) as unknown as HTMLInputElement;
      if(ele.checked == true){
        selectedLanguages.push(ele.value)
      }
    })

    this.filmCategoriesList.forEach(element => {
      const ele = document.getElementById(element.filmCategory1) as unknown as HTMLInputElement;
      if(ele.checked == true){
        selectedCategories.push(ele.value)
      }
    })

    console.log(selectedCategories)
    console.log(selectedLanguages)
    console.log(selectedGenres)

    var newMovie: any = {
      "movieId": this.id,
      "name": this.addMovieForm.value.name,
      "time": this.addMovieForm.value.time,
      "image": this.movieImage,
      "dateOfRelease": this.addMovieForm.value.dateOfRelease,
      "about": this.addMovieForm.value.about,
      "certification": this.addMovieForm.value.certification,
      "isRecommended": this.addMovieForm.value.isRecommended,
      "isPremiere": this.addMovieForm.value.isPremiere,
      "backgroundImage": this.movieBgImage,
      "cast": this.movie.cast,
      "castImages": this.movie.castImages,
      "genres": selectedGenres,
      "languages": selectedLanguages,
      "filmCategories": selectedCategories
    }

    console.log(newMovie);
    this.updateMovie(newMovie);

    alert("Movie updated successfully");

    this.addMovieForm.reset();

    this.router.navigate(['/admin-dashboard/movies']);
  }

  updateMovie(newMovie: any): void {
    this.moviesService.updateMovie(newMovie)
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
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.moviesService.getMovie(this.id)
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
      this.movie.movieLanguages.forEach(item => {
        this.selectedLanguages.push(item.language)
      }),
      this.movie.movieGenres.forEach(item => {
        this.selectedGenres.push(item.genre)
      }),
      
      console.log(this.movie),
      this.addMovieForm.patchValue({
        name: this.movie.name,
        time:  this.movie.time,
        image: this.movie.image,
        dateOfRelease: this.datepipe.transform(this.movie.dateOfRelease, 'yyyy-MM-dd'),
        about: this.movie.about,
        certification: this.movie.certification.certification1,
        isRecommended: this.movie.isRecommended,
        isPremiere: this.movie.isPremiere,
        backgroundImage: this.movie.backgroundImage
      });

      this.movieImage = this.addMovieForm.value.image
      this.movieBgImage = this.addMovieForm.value.backgroundImage

      this.selectedFilmCategories.forEach(item => {
        this.filmCategoriesList.forEach(element => {
          if(item == element.filmCategory1){
            const ele = document.getElementById(element.filmCategory1) as unknown as HTMLInputElement;
            ele.checked = true;
          }
        })
      }),
      this.selectedLanguages.forEach(item => {
        this.languagesList.forEach(element => {
          if(item == element.language1){
            const ele = document.getElementById(element.language1) as unknown as HTMLInputElement;
            ele.checked = true;
          }
        })
      }),
      this.selectedGenres.forEach(item => {
        this.genresList.forEach(element => {
          if(item == element.genre1){
            const ele = document.getElementById(element.genre1) as unknown as HTMLInputElement;
            ele.checked = true;
          }
        })
      })

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
    private datepipe: DatePipe,
    private router: Router
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
      genres: this.fb.array([]),
      languages: this.fb.array([]),
      filmCategories: this.fb.array([])
    });
  }

  ngOnChanges(){
    
  }

  ngOnInit(): void {
    this.getCertifications();
    this.getGenres();
    this.getLanguages();
    this.getFilmCategories();
    this.getMovie();

  }

}
