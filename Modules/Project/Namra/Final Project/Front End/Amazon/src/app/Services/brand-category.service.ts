import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand, Category } from '../Models/BrandCategory';

@Injectable({
  providedIn: 'root'
})
export class BrandCategoryService {

  constructor(private httpClient: HttpClient) { }
  URL: string = 'https://localhost:44368/api/';

  AllBrands(): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.URL + "Brand/GetAll");
  }
  AllCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL + "Category/GetAll");
  }
  BrandById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(this.URL + "Brand/GetById/" + id);
  }
  CategoryById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(this.URL + "Category/GetById/" + id);
  }
  CategoryByName(id: string): Observable<Category> {
    return this.httpClient.get<Category>(this.URL + "Category/GetByCategoryName/" + id);
  }
  BrandByName(id: string): Observable<Brand> {
    return this.httpClient.get<Brand>(this.URL + "Brand/GetByBrandName/" + id);
  }
  SearchBrand(name: string): Observable<Brand[]> {
    return this.httpClient.get<Brand[]>(this.URL + "Brand/GetByName/" + name);
  }
  SearchCategory(name: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.URL + "Category/GetByName/" + name);
  }
  UpdateBrand(l: Brand): Observable<boolean> {
    return this.httpClient.put<boolean>(this.URL+"Brand/Update", l);
  }
  CreateBrand(l : Brand) : Observable<number>
  {
    return this.httpClient.post<number>(this.URL +"Brand/Create", l);
  }
  DeleteBrand(id : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"Brand/Delete/"+id);
  }
  UpdateCategory(l: Category): Observable<boolean> {
    return this.httpClient.put<boolean>(this.URL+"Category/Update", l);
  }
  CreateCategory(l : Category) : Observable<number>
  {
    return this.httpClient.post<number>(this.URL +"Category/Create", l);
  }
  DeleteCategory(id : number) : Observable<boolean>
  {
    return this.httpClient.delete<boolean>(this.URL+"Category/Delete/"+id);
  }
}
