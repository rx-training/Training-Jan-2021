import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  URL : string = 'https://localhost:44368/api/';

  constructor(private httpClient : HttpClient) { }

  searchTags(): Observable<string[]>
  {
    return this.httpClient.get<string[]>(this.URL+"Product/SearchTags");
  }

  SearchByProduct(searchName : string) : Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(this.URL+"Product/SearchProduct/"+searchName)
  }
  
  searchLogs : string[] = [];
  AddLog(log : string)
  {
    this.searchLogs.push(log);
  }
  deleteLog(idx : number)
  {
    this.searchLogs.splice(idx,1);
  }
  ClearLog()
  {
    this.searchLogs = [];
  }
}
