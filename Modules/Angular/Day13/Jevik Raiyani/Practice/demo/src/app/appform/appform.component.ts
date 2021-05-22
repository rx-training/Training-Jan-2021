import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.css']
})
export class AppformComponent implements OnInit {
  Name:"";
  Author:"";
  booklist =   [];

  @Output() addBook=new EventEmitter(); 

  constructor() { }

  ngOnInit(): void {
  }
  sotreBook(){
    console.log("_______")
    this.booklist.push({Name:this.Name,Author:this.Author});
    this.addBook.emit(this.booklist); 
  } 

}
