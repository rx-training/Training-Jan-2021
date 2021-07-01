import { Injectable ,Inject,Input} from '@angular/core';
import { BrandList } from './BrandList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  url = 'https://localhost:44327/api/Brands'; 
  constructor(private http: HttpClient) { }
  
  getAllBrands(): Observable<BrandList[]> {  
    return this.http.get<BrandList[]>(this.url + '/AllBrands');  
  }  

  getBrandById(brandId: number): Observable<BrandList> {  
    return this.http.get<BrandList>(this.url + '/AllBrandsById/'+brandId);  
  }  

  createBrand(brand: BrandList): Observable<BrandList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<BrandList>(this.url + '/InsertBrandDetails/',  
    brand, httpOptions);  
  }  

  updateBrand(brandId : number,brand: BrandList): Observable<BrandList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<BrandList>( this.url + '/UpdateBrandDetails/'+ brandId,  
    brand, httpOptions);  
  }  

  deleteBrandById(brandId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteBrandDetails/' + brandId,  
 httpOptions);  
  }  

}
