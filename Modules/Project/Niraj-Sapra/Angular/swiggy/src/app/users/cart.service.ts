import { Injectable } from '@angular/core';
import { cart  } from './cart';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = "https://localhost:44391/api/Carts";
  //url = environment.baseurl+'Restaurant';  


  constructor(private http: HttpClient) { }
  
  //Get all data
  getAll(): Observable<cart[]> {  
    return this.http.get<cart[]>(this.url);  
  }


  //push data
  PushnewData(cityob:cart): Observable<cart> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("oks");
    console.log(cityob);
    return this.http.post<cart>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateData(sid : number,users: cart): Observable<cart> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("enter");
    console.log(this.url+'/'+sid);
    console.log(users);
    return this.http.put<cart>( this.url+'/'+sid,  
    users, httpOptions).pipe(
      tap(_ => console.log(`updates news id=${sid}`)));   ;

  }  
  ​​
//delete data
  deleteDataById(sid: number): Observable<number> {     
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url+'/'+sid,httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${sid}`)));  
  }

}
