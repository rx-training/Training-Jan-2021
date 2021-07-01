import { Injectable ,Inject,Input} from '@angular/core';
import {ProductList } from './ProductList';
import { throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable} from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class MenServiceService {
  [x: string]: any;
  url = 'https://localhost:44327/api/Products'; 
  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewMan');  
  } 

  getAllProductsWomen(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewWoman');  
  } 

  getAllProductsMen(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewMan');  
  } 

  getAllProductsKids(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewKid');  
  } 

  /* GET heroes whose name contains search term */
searchProducts(term: string): Observable<ProductList[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<ProductList[]>(`${this.url}/?productDescription=${term}`).pipe(
    tap(x => x.length ?
       this.log(`found heroes matching "${term}"`) :
       this.log(`no heroes matching "${term}"`)),
    catchError(this.handleError('searchProducts',[]))
  );
}
}
