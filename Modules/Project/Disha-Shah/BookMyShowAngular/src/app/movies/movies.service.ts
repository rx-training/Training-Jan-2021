import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { IMovies } from '../models/IMovies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  theatresList: Array<any> = [];
  movieId: number = 0;

  private moviesUrl = 'https://localhost:44380/api/BookMyShow/Movies';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.moviesUrl);
  }

  getMovie(id: number): Observable<IMovies[]> {
    const url = `${this.moviesUrl}/${id}`; 
    return this.http.get<IMovies[]>(url);
  }

  getMoviesByGenre(genre: string): Observable<IMovies[]>{
    const url = `${this.moviesUrl}/Genres/${genre}`; 
    return this.http.get<IMovies[]>(url);
  }
  
  getMoviesByLanguage(language: string): Observable<IMovies[]>{
    const url = `${this.moviesUrl}/Languages/${language}`; 
    return this.http.get<IMovies[]>(url);
  }
  
  getMoviesByGenreLanguage(genre: string, language: string): Observable<IMovies[]>{
    const url = `${this.moviesUrl}/Genres/${genre}/Languages/${language}`;
    return this.http.get<IMovies[]>(url);
  }

  getFilmCategoriesByLanguages(id: number, language: string): Observable<IMovies[]>{
    const url = `${this.moviesUrl}/${id}/Languages/${language}/FilmCategories`;
    return this.http.get<IMovies[]>(url);
  }

  getTheatresBySelectedMovieCategory(id: number, language: string, filmCategory: string): Observable<IMovies[]>{
    const url = `${this.moviesUrl}/${id}/Languages/${language}/FilmCategories/${filmCategory}/Theatres`;
    return this.http.get<any[]>(url);
  }

  getShowTimingsByTheatre(id: number, language: string, filmCategory: string, theatreId: number): Observable<any[]>{
    const url = `${this.moviesUrl}/${id}/Languages/${language}/FilmCategories/${filmCategory}/Theatres/${theatreId}/ShowTimings`;
    return this.http.get<any[]>(url);
  }

  getSeatsCategoryByShowTime(id: number, language: string, filmCategory: string, theatreId: number, showTime: string): Observable<any[]>{
    const url = `${this.moviesUrl}/${id}/Languages/${language}/FilmCategories/${filmCategory}/Theatres/${theatreId}/ShowTimings/${showTime}/SeatCategories`;
    return this.http.get<any[]>(url);
  }

  getSeatsBySeatCategory(id: number, language: string, filmCategory: string, theatreId: number, showTime: string, seatCategory: string): Observable<any[]>{
    const url = `${this.moviesUrl}/${id}/Languages/${language}/FilmCategories/${filmCategory}/Theatres/${theatreId}/ShowTimings/${showTime}/SeatsCategories/${seatCategory}/Seats`;
    return this.http.get<any[]>(url);
  }

  setTheatres(theatres: Array<any>, id: number){
    this.theatresList = theatres;
    this.movieId = id;
    console.log(this.theatresList);
  }

  getTheatres(){
    console.log(this.theatresList);
    return this.theatresList;
  }

  getMovieId(){
    return this.movieId;
  }

  // /** POST: add a new hero to the server */
  // addStudent(student: IStudent): Observable<IStudent> {
  //   return this.http.post<IStudent>(this.studentsUrl, student, this.httpOptions);
  // }

  // /** PUT: update the hero on the server */
  // updateStudent(student: any): Observable<any> {
  //   const url = `${this.studentsUrl}/${student.studentId}`;

  //   return this.http.put(url, student, this.httpOptions);
  // }

  // /** DELETE: delete the hero from the server */
  // deleteStudent(id: number): Observable<IStudent> {
  //   const url = `${this.studentsUrl}/${id}`;

  //   return this.http.delete<IStudent>(url, this.httpOptions);
  // }

}
