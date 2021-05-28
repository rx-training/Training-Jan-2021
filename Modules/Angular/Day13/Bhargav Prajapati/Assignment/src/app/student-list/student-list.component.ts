import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  StdList:Array<any>=[];
  
  
  @Input() data:any;
  ngOnInit(): void {

    
   
  }
  constructor() {
    
    
   }

   Show()
   {
    this.StdList.push(this.data);
    console.log(this.StdList)
 
   }

    
    
  
  


  


}
