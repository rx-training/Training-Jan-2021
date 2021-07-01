import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NewsContent } from './Models/NewsContent';

@Injectable({
  providedIn: 'root'
})
export class NewscontentService {
  private Url = 'http://20.198.103.48:1006/api/Newscontents';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  getNews(): Observable<NewsContent[]> {
    console.log("get called")
    return this.http.get<NewsContent[]>(this.Url)
      .pipe(catchError(this.handleError<NewsContent[]>('get NewsContents', [])));
  }
  getHeaderWiseNews(id:number) : Observable<NewsContent[]> {
    const url = `${this.Url}/NewsHeader/${id}`;
    return this.http.get<NewsContent[]>(url,this.httpOptions)
      .pipe(catchError(this.handleError<NewsContent[]>('get NewsContents', [])));
  }
  getNewsById(id:number) : Observable<NewsContent> {
    const url = `${this.Url}/${id}`;
    return this.http.get<NewsContent>(url,this.httpOptions)
      .pipe(catchError(this.handleError<NewsContent>('get NewsContent by id')));
  }
  AddNews(hero: NewsContent): Observable<NewsContent> {
    return this.http.post<NewsContent>(this.Url, hero, this.httpOptions).pipe(
      tap((newHero: NewsContent) => console.log(`added hero w/ id=${newHero.contentId}`)),
      catchError(this.handleError<NewsContent>('addHero'))
    );
  }
  UpdateNews(hero: NewsContent): Observable<NewsContent> {
    console.log("update Called")
    return this.http.put<NewsContent>(this.Url, hero, this.httpOptions).pipe(
      tap((newHero: NewsContent) => console.log(`updated NewsContent w/ id=${newHero.contentId}`)),
      catchError(this.handleError<NewsContent>('update hero'))
    );
  }
  DeleteNews(id: number|undefined): Observable<NewsContent> {
    const url = `${this.Url}/${id}`;

    return this.http.delete<NewsContent>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${id}`)),
      catchError(this.handleError<NewsContent>('deleteNews'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}