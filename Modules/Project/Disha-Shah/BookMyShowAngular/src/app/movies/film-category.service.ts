import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilmCategories } from '../models/IFilmCategories';

@Injectable({
  providedIn: 'root'
})
export class FilmCategoryService {

  private filmCategoriesUrl = 'http://20.198.103.48:1005/api/BookMyShow/FilmCategory';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getFilmCategories(): Observable<IFilmCategories[]> {
    return this.http.get<IFilmCategories[]>(this.filmCategoriesUrl);
  }
}
