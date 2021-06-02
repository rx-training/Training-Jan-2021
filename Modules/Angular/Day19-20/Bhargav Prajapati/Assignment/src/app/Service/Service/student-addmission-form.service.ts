import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { StudentDetails } from 'src/app/Model/StudentDetails';


@Injectable({
  providedIn: 'root'
})
export class StudentAddmissionFormService {

  url:string="https://localhost:44356/api/StudentAdmission"
  constructor(private http:HttpClient) { }
  httpoption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }
  GetAllStudent():Observable<StudentDetails[]>
  {
      return this.http.get<StudentDetails[]>(this.url);
  }
  InserStudent(student:StudentDetails):Observable<StudentDetails>
  {
      return this.http.post<StudentDetails>(this.url,student,this.httpoption);
  }
  UpdateStudent(id:number,student:StudentDetails):Observable<StudentDetails>
  {
    return this.http.put<StudentDetails>(this.url+`/${id}`,student);
  }
  DeleteStudent(id:number):Observable<StudentDetails>
  {
    console.log(id);
    return this.http.delete<StudentDetails>(this.url+`/${id}`,this.httpoption);
  }
    
 }
