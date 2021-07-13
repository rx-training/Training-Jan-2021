import { Injectable } from '@angular/core';
import { restaurant  } from './restaurant';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestorentService {
  url = "https://localhost:44391/api/Restaurant";
  //url = environment.baseurl+'Restaurant';  


  constructor(private http: HttpClient) { }
  
  //Get all data
  getAll(): Observable<restaurant[]> {  
    return this.http.get<restaurant[]>(this.url);  
  }


  //push data
  PushnewData(cityob:restaurant): Observable<restaurant> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("oks");
    console.log(cityob);
    return this.http.post<restaurant>(this.url,  
    cityob, httpOptions);  
  }  

  //update data
  updateData(sid : number,users: restaurant): Observable<restaurant> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    console.log("enter");
    console.log(this.url+'/'+sid);
    console.log(users);
    return this.http.put<restaurant>( this.url+'/'+sid,  
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
