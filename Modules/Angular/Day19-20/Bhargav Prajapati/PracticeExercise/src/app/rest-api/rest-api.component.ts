import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestAPIService } from '../Services/rest-api.service';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {

  constructor(private service:RestAPIService,private fb:FormBuilder)
   { }
  data:any;
  employee:FormGroup;

  ngOnInit(): void {

    this.employee=this.fb.group({
      EmployeeId:[''],
      EmployeeName:[''],
      EmployeeSalary:[''],
      EmployeeJobtitle:['']
    })

    this.service.getData().subscribe(user=>
      {
        console.log(user);
        this.data=user;
      }, 
      (err)=>
      {
        console.log(err);
      })

  }

  InsertData()
  {
      this.service.postData(this.employee.value).subscribe(abc=>
        {console.log(abc)},
        (err)=>{console.log(err)}
        );    
  }
  DeleteData(id)
  {
    console.log(id);
      this.service.DeleteData(1).subscribe( def=>
        {console.log("data is successfully deleted")},
        (err)=>{console.log(err)}
        )
  }



}
