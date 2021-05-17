import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm :FormGroup;

  constructor() {
    this.bookForm = new FormGroup({
      Name: new FormControl(),
      Author: new FormControl(),
      Price: new FormControl(),

      Publisher: new FormGroup({
        PublisherName: new FormControl(),
        ContactNumber: new FormControl(),

        Location : new FormGroup({
          City: new FormControl(),
          Landmark : new FormControl(),
          State : new FormControl()
        }),
      }),

      Subscriber: new FormArray([
        new FormGroup({
          SubscriberName: new FormControl(),
          SubscriberContactNummber : new FormControl(),
          Purchasedate: new FormControl()
        }),
        new FormGroup({
          SubscriberName: new FormControl(),
          SubscriberContactNummber : new FormControl(),
          Purchasedate: new FormControl()
        }),
      ])
    })
   }

  ngOnInit(): void {
  }
  get getSubscriber(){
    return this.bookForm.get("Subscriber") as FormArray;
  }

  submitdata(){
    console.log(this.bookForm);
  }

}
