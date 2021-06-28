import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDynamicNavbar } from './models/IDynamicNavbar';

@Injectable({
  providedIn: 'root'
})
export class DynamicNavbarService {

  private dynamicNavbarsUrl = environment.baseUrl + 'api/BookMyShow/DynamicNavbar';  // URL to web api

  loginToken = '';

  getToken(){
    const tokenObj: any = JSON.parse(localStorage.getItem("logged_in_admin"));
    this.loginToken = tokenObj.token;
    console.log(this.loginToken);
  }

  constructor(private http: HttpClient) {  }

  /** GET students from the server */
  getDynamicNavbars(): Observable<IDynamicNavbar[]> {
    return this.http.get<IDynamicNavbar[]>(this.dynamicNavbarsUrl);
  }

  getDynamicNavbar(id: number): Observable<any> {
    const url = `${this.dynamicNavbarsUrl}/${id}`; 
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };
    return this.http.get<any>(url);
  }

  /** POST: add a new hero to the server */
  addNavbarComponent(component: any): Observable<any> {
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    };  
    console.log(httpOptions);
    return this.http.post<any>(this.dynamicNavbarsUrl, component, httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteNavbarComponent(id: number): Observable<IDynamicNavbar> {
    const url = `${this.dynamicNavbarsUrl}/${id}`;
    this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.loginToken}` })
    }; 
    return this.http.delete<IDynamicNavbar>(url, httpOptions);
  }

}
