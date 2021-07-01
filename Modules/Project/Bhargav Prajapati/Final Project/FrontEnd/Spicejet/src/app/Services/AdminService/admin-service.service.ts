import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminDetails } from 'src/app/Models/AdminDetails';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url:string="https://localhost:44395/api/Admin"
  constructor(private http:HttpClient)
   { }


   GetAllAdmin():Observable<Array<AdminDetails>>
   {
     return this.http.get<Array<AdminDetails>>(this.url);
   }


   

}
