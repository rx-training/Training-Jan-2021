import { Injectable ,Inject,Input} from '@angular/core';
import { PaymentList } from './PaymentList';
import { inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url = 'https://localhost:44327/api/Payment1s'; 
  constructor(private http: HttpClient) { }
  
  getAllPayments(): Observable<PaymentList[]> {  
    return this.http.get<PaymentList[]>(this.url + '/AllPayments');  
  }  

  getPaymentById(srId: number): Observable<PaymentList> {  
    return this.http.get<PaymentList>(this.url + '/AllPaymentsById/'+srId);  
  }  

  createPayment(payment : PaymentList): Observable<PaymentList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<PaymentList>(this.url + '/InsertPaymentDetails/',  
    payment, httpOptions);  
  }  

  updatePayment(srId : number,payment: PaymentList): Observable<PaymentList> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<PaymentList>( this.url + '/UpdatePaymentDetails/'+ srId,  
    payment, httpOptions);  
  }  

  deletePaymentById(srId: number): Observable<number> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.delete<number>(this.url + '/DeletePaymentDetails/' + srId,  
 httpOptions);  
  }  

}
