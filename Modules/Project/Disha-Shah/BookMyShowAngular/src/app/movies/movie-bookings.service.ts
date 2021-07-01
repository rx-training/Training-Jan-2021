import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieBookings } from '../models/IMovieBookings';

@Injectable({
  providedIn: 'root'
})
export class MovieBookingsService implements OnInit{

  private movieBookingsUrl = environment.baseUrl + 'api/BookMyShow/MovieBookings';  // URL to web api
  loginToken = '';

  getToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_user"));
    this.loginToken = tokenObj.token;
    console.log(this.loginToken);
  }

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getMovieBookings(): Observable<IMovieBookings[]> {
    return this.http.get<IMovieBookings[]>(this.movieBookingsUrl);
  }

  getMovieBookingsByContact(contact: string): Observable<IMovieBookings[]> {
    const url = `${this.movieBookingsUrl}/${contact}`; 
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };  
    return this.http.get<IMovieBookings[]>(url, httpOptions);
  }

  /** POST: add a new hero to the server */
  addMovieBooking(booking: any): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };  
    console.log(httpOptions);
    return this.http.post<any>(this.movieBookingsUrl, booking, httpOptions);
  }

  ngOnInit() : void{
    
  }
}
