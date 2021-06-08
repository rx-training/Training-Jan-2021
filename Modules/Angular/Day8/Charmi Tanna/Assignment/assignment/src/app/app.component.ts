import { Component } from '@angular/core';
interface IStudent {
  ID : number,
  Name : string,
  Age : number,
  Average : number,
  grade : string,
  Active :string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements IStudent  {
  title = 'assignment';
  ID : number=0;
  Name : string="";
  Age : number=0;
  Average : number=0;
  grade : string="";
  Active :string="";
  constructor( ID: number, Name: string, Age: number,Average : number,Grade:string,Active :string) {
      this.ID = ID;
      this.Name = Name;
      this.Age = Age;
      this.Average = Average;
      this.grade = Grade;
      this.Active = Active;
  }
}
var student1 = [ new AppComponent (1,"Riya",20,30,"A","Active"),new AppComponent (2,"Beena",30,30,"B","Not Active")];