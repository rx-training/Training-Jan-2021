import { AdminList } from './AdminList';
import { Injectable ,Inject,Input} from '@angular/core';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url = 'https://localhost:44327/api/AdminLogins'; 
  constructor(private http: HttpClient) { }
  
  getAllAdmins(): Observable<AdminList[]> {  
    return this.http.get<AdminList[]>(this.url + '/AllAdmins');  
  }  

  // getCustomerById(emailId: number): Observable<CustomerList> {  
  //   return this.http.get<CustomerList>(this.url + '/AllCustomersById/'+emailId);  
  // }  

  createAdmin(admin: AdminList): Observable<AdminList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<AdminList>(this.url + '/InsertAdminDetails/',  
    admin, httpOptions);  
  }  

//   updateCustomer(emailId : number,customer: CustomerList): Observable<CustomerList> {  
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.put<CustomerList>( this.url + '/UpdateCustomerDetails/'+emailId,  
//     customer, httpOptions);  
//   }  

//   deleteCustomerById(emailId: number): Observable<number> {  
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.delete<number>(this.url + '/DeleteStudentDetails/' + emailId,  
//  httpOptions);  
//   }  
 
}
