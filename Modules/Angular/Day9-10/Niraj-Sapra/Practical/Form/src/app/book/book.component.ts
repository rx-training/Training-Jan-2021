import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray} from '@angular/forms';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  
  constructor() {
    }
  newtest:FormGroup;

  ngOnInit(): void {
    this.newtest = new FormGroup(
      {
        name:new FormControl(),
        Author: new FormControl(),
        price : new FormControl(),
        Publiser:new FormGroup({
       city:new FormControl(),
         state:new FormControl()
         }),
         Subscribers: new FormArray([
          new FormGroup( {
            SubscriberName : new FormControl(),
            SubscriberContectNumber : new FormControl(),
            PerchaseDate:new FormControl()
          })
        ]) 
      }
    )
  }  
  get getSubscribers(){
   // return this.newtest.get('Subscriber') as FormArray;
   return this.newtest.get('Subscribers') as FormArray;
  }
  addSubscriberName(){
    this.getSubscribers.push(new FormControl({
      SubscriberName : new FormControl(),
      SubscriberContectNumber : new FormControl(),
      PerchaseDate:new FormControl()
    })
    );
  }
   onsubmit()
   {  
    console.log(this.newtest);
  } 
}
