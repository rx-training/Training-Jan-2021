 import { Injectable } from '@angular/core';
 import { Studentassingments} from './studentassingments';
 
@Injectable({
  providedIn: 'root'
})
export class StudentassingmentService {
  constructor() { }
  list:Array<Studentassingments>=[{ID:1,Name:"Niraj",Address:"Bhavnagar"},{ID:2,Name:"Nill",Address:"Ahemdabad"}]
  public studentassinglist(){
    return this.list;
  }
  public AddStudent(studentassign:Studentassingments){
    this.list.push(studentassign);
    console.log("add");
  }
  public RemoveStudent(id:number){
    console.log("remove"+  +id);
    this.list.forEach( (item, index) => {
      if(item.ID === id) this.list.splice(index,1);
    });  
  }
  // public UpdateStudent(id){
  //   var ob = this.list.findIndex((obj => obj.ID == id));
  //   this.list[ob].ID = 
  //   // this.list.forEach( (item, index) => {
  //   //   if(item.ID === id) this.list.splice(index,1);
  //   // });
  // }
}
