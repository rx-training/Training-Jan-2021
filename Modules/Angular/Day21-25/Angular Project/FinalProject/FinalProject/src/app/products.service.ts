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
export class ProductsService {
  [x: string]: any;
  url = 'https://localhost:44327/api/Products'; 
  constructor(private http: HttpClient) { }
  
  getAllProducts(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/AllProducts');  
  } 

  getAllProductsWomen(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewWoman');  
  } 

  getAllProductsWomen999(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewWoman999');  
  } 

  getAllProductsMen(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewMan');  
  } 

  getAllProductsMen999(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewMan999');  
  } 

  getAllProductsKids(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewKid');  
  } 

  getAllProductsKids999(): Observable<ProductList[]> {  
    return this.http.get<ProductList[]>(this.url + '/ViewKid999');  
  } 

  createProduct(product : ProductList): Observable<ProductList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<ProductList>(this.url + '/InsertProductsDetails/',  
    product, httpOptions);  
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

updateProduct(productCode : string , product : ProductList): Observable<ProductList> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.put<ProductList>( this.url + '/UpdateProductDetails/'+ productCode,  
  product, httpOptions);  
}  

deleteProductById(productCode: string): Observable<number> {  
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
  return this.http.delete<number>(this.url + '/DeleteProductDetails/' +productCode,  
httpOptions);  
}  

getProductById(productCode: string): Observable<ProductList> {  
  return this.http.get<ProductList>(this.url + '/AllProductsById/'+productCode);  
}  
}