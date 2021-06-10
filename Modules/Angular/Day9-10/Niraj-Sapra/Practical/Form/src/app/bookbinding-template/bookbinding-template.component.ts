import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormArray, Validators} from '@angular/forms';
@Component({
  selector: 'app-bookbinding-template',
  templateUrl: './bookbinding-template.component.html',
  styleUrls: ['./bookbinding-template.component.css']
})
export class BookbindingTemplateComponent implements OnInit {
  bookForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { 
    
    this.bookForm =this.formbuilder.group(
      {
        name:['',Validators.required],
        Author: ['',Validators.required],
        price : ['',Validators.required],
        Publiser:this.formbuilder.group({
       city:['',Validators.required],
         state:['',Validators.required]
         }),
         Subscribers:this.formbuilder.array([
          this.formbuilder.group( {
            SubscriberName :['',Validators.required],
            SubscriberContectNumber :['',Validators.required],
            PerchaseDate:['',Validators.required]
          })
        ]) 
      }
    )
  }
  
  ngOnInit(): void {
  }  
  get getSubscribers(){
   return this.bookForm.get('Subscribers') as FormArray;
  }
  addSubscriberName(){
    this.getSubscribers.push(this.formbuilder.group({
      SubscriberName : ['',Validators.required],
      SubscriberContectNumber : ['',Validators.required],
      PerchaseDate: ['',Validators.required]
    })
    );
  }
   onsubmit()
   {  
    console.log(this.bookForm);
  } 
}
