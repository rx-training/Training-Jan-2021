import { Component, OnInit } from '@angular/core';
import { StudentDetails } from './IStudent';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  


   studentinfo:StudentDetails[]=
   [
     {StudentId:1,StudentName:"Karan",StudentAge:25,Average:150,Grade:"A",Status:"Active"},
     {StudentId:2,StudentName:"Parth",StudentAge:18,Average:120,Grade:"C",Status:"Active"},
     {StudentId:3,StudentName:"Jenil",StudentAge:20,Average:180,Grade:"A",Status:"Inactive"},
     {StudentId:4,StudentName:"Yesh",StudentAge:15,Average:140,Grade:"C",Status:"Active"},
     {StudentId:5,StudentName:"Mayank",StudentAge:20,Average:150,Grade:"B",Status:"Active"},
     {StudentId:6,StudentName:"scdsdsfdf",StudentAge:20,Average:150,Grade:"A",Status:"Active"},
     {StudentId:7,StudentName:"sdgdgdg",StudentAge:20,Average:120,Grade:"B",Status:"Active"},
     {StudentId:8,StudentName:"sdgdgdg",StudentAge:20,Average:110,Grade:"C",Status:"Active"},
     {StudentId:9,StudentName:"dgdfgfdgf",StudentAge:20,Average:150,Grade:"A",Status:"Active"},
     {StudentId:10,StudentName:"dgdfgfdgf",StudentAge:20,Average:150,Grade:"A",Status:"Active"}
   ]

   stdName:string='';
   Age:number=0;
   Average:number=0;
   Grade:string='';
   status:string='';
   Id:number=0;
 
   getColor(val)
   {
     switch(val.Grade)
     {
       case 'A':
         return 'green'
        case 'B':
          return 'blue'
          case 'C':
            return 'red'
     }
   }

   DeleteData(idx)
{
    this.studentinfo.splice(idx,1);

}

EditData(item)
{
  this.Id=item.StudentId
   this.stdName=item.StudentName;
   this.Age=item.StudentAge;
   this.Average=item.Average;
   this.Grade=item.Grade;
   this.status=item.Status;
   
 
}
 
Updatedata()
{
    var item=this.studentinfo.find(s=>s.StudentId==this.Id);
    item.StudentName=this.stdName;
    item.StudentAge=this.Age;
    item.Grade=this.Grade;
    item.Status=this.status;
}   

}
