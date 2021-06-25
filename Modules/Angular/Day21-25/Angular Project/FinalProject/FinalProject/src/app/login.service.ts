
import { Injectable ,Inject,Input} from '@angular/core';
import {CustomerList } from './CustomerList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'https://localhost:44327/api/Customers'; 
  constructor(private http: HttpClient) { }
  
  getAllCustomers(): Observable<CustomerList[]> {  
    return this.http.get<CustomerList[]>(this.url + '/AllCustomers');  
  }  

  getCustomerById(customerid: number): Observable<CustomerList> {  
    return this.http.get<CustomerList>(this.url + '/AllCustomersById/'+customerid);  
  }  

  createCustomer(customer: CustomerList): Observable<CustomerList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<CustomerList>(this.url + '/InsertCustomerDetails/',  
    customer, httpOptions);  
  }  

  updateCustomer(customerid : number,customer: CustomerList): Observable<CustomerList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CustomerList>( this.url + '/UpdateCustomerDetails/'+customerid,  
    customer, httpOptions);  
  }  

  deleteCustomerById(customerid: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeleteStudentDetails/' +customerid,  
 httpOptions);  
  }  

}
