import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IGenres } from '../models/IGenres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private genresUrl = environment.baseUrl + 'api/BookMyShow/Genres';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getGenres(): Observable<IGenres[]> {
    return this.http.get<IGenres[]>(this.genresUrl);
  }

  getGenre(id: number): Observable<IGenres[]> {
    const url = `${this.genresUrl}/${id}`; 
    return this.http.get<IGenres[]>(url);
  }
}
