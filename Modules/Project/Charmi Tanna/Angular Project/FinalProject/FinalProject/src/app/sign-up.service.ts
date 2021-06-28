import { Injectable ,Inject,Input} from '@angular/core';
import {CustomerList } from './CustomerList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  url = 'https://localhost:44327/api/CustomerSignUps'; 
  constructor(private http: HttpClient) { }
  
  getAllCustomers(): Observable<CustomerList[]> {  
    return this.http.get<CustomerList[]>(this.url + '/AllCustomers');  
  }  

  getCustomerById(emailId : string): Observable<CustomerList> {  
    return this.http.get<CustomerList>(this.url + '/AllCustomersById/'+emailId);  
  }  

  createCustomer(customer : CustomerList): Observable<CustomerList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<CustomerList>(this.url + '/InsertCustomersDetails/',  
    customer, httpOptions);  
  }  

  updateCustomer(emailId : string,customer: CustomerList): Observable<CustomerList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<CustomerList>( this.url + '/UpdateCustomerDetails/'+emailId,  
    customer, httpOptions);  
  }  

  deleteCustomerById(emailId : string): Observable<string> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<string>(this.url + '/DeleteCustomerDetails/' + emailId,  
 httpOptions);  
  }  
 
}
