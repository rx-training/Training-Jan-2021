import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {
  url:string="https://jsonplaceholder.typicode.com/users/"
  constructor(private http:HttpClient)
  {

  }

  getData()
  {
    return this.http.get(this.url)
  }
  postData(Data:any)
  {
      return this.http.post(this.url,Data);
  }
  DeleteData(id:number)
  {
    console.log(id);
      return this.http.delete(this.url+id);
  }

}
