import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers : new HttpHeaders({ 'Content-Type' : 'application/json' })
  };

  constructor(private http : HttpClient, private service : MessageService) {  }

  getHeroes() : Observable<Hero[]>{
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('Fetched Heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id : number) : Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`Fetched Hero id : ${id}`)),
      catchError(this.handleError<Hero>(`getHero id : ${id}`))
    );
  }

  addHero(hero : Hero) : Observable<Hero>{
    return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero : Hero) => this.log(`Added new Hero with id : ${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  updateHero(hero : Hero) : Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`Updated Hero id : ${hero.id}`)),
      catchError(this.handleError<any>('UpdateHero'))
    );  
  }

  deleteHero(id : number) : Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`Deleted Hero id : ${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term : string) : Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ? this.log(`Found Heroes matching : ${term}`) : this.log(`No Heroes matching ${term}`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'opeartion', result? : T){
    return (error : any) : Observable<T> => {
      console.error(error);
      this.log(`${operation} failed : ${error.message}`);
      return of(result as T);
    }
  }

  private log(msg : string){
    this.service.add(`HeroService : ${msg}`);
  }
}
