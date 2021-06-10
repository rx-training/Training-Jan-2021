import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { employee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpDemoService {
  url : string = "https://localhost:44384/api/customer/GetAll";
  constructor(private httpClient : HttpClient) { 
    
  }


  getEmployee() : Observable<any[]>{
     return this.httpClient.get<any[]>(this.url)
  }
}
