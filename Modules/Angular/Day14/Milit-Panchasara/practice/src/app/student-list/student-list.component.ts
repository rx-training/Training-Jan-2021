import { Component, OnInit } from '@angular/core';
import { ChildService } from '../child.service';
import { namesData } from '../data';
import { MasterService } from '../master.service';
import { StudentService } from '../student.service';
import { API_URL, ValueDataService } from '../value-data.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers:[StudentService, {provide:MasterService, useClass: ChildService}, {provide:ValueDataService, useClass: ValueDataService}, {provide:API_URL, useValue:"https://tutorials.rxtrainees.radixweb.net/typescript-and-angular-training-plan/" }]
})

export class StudentListComponent implements OnInit {
  count:number;
  message:string;
  master:any;
  student:StudentService;
  list:any[];

  constructor(private studentService: StudentService, private masterService: ChildService, private apiService: ValueDataService) { 
    this.student = studentService;
    this.count = this.student.count;
    this.message = this.student.message;
    this.master = this.student.master;
    console.log(this.masterService.master);
  }
 
  invokeApi(): void {
    this.apiService.get();
  }

  ngOnInit(): void {
    this.invokeApi();
    const numbersObservable = this.studentService.getnumbers();

    numbersObservable.subscribe((numberList:any[]) => {
      this.list = numberList;
      console.log(this.list);
      
    });
    
  }
}


// private nameData:ValueDataService, 
