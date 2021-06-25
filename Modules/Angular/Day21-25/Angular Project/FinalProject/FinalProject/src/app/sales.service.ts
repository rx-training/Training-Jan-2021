import { SaleList } from './SaleList';
import { Inject, Injectable,Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  url = 'https://localhost:44327/api/Sales1';  

  constructor(private http : HttpClient) { }  
  getAllSales() : Observable<SaleList[]> {  
    return this.http.get<SaleList[]>(this.url + '/AllSales');  
  }  

  getSaleById(saleId : number) : Observable<SaleList> {  
    return this.http.get<SaleList>(this.url + '/AllSalesById/'+saleId);  
  }  

  createSale(order : SaleList): Observable<SaleList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<SaleList>(this.url + '/InsertSaleDetails/',  
    order, httpOptions);  
  }    

  updateSale(saleId : number,order: SaleList): Observable<SaleList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<SaleList>( this.url + '/UpdateSaleDetails/'+ saleId,  
    order, httpOptions);  
  }  

  deleteSaleById(saleId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteSaleDetails/' + saleId,  
 httpOptions);  
  }  

}
