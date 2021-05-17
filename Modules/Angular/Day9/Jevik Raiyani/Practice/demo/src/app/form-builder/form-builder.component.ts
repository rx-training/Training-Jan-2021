import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  bookForm :FormGroup;

  constructor(private formbuilder:FormBuilder) {
    this.bookForm = this.formbuilder.group({
      Name:['',Validators.required],
      Author:['',Validators.required],
      Price:['',Validators.required],

      Publisher:this.formbuilder.group({
        PublisherName:['',Validators.required],
        ContactNumber:['',Validators.required],

        Location :this.formbuilder.group({
          City:['',Validators.required],
          Landmark :['',Validators.required],
          State :['',Validators.required],
        }),
      }),

      Subscriber:this.formbuilder.array([
        this.formbuilder.group({
          SubscriberName: ['',Validators.required],
          SubscriberContactNummber : ['',Validators.required],
          Purchasedate:['',Validators.required],
        }),
        this.formbuilder.group({
          SubscriberName:['',Validators.required],
          SubscriberContactNummber : ['',Validators.required],
          Purchasedate:['',Validators.required],
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
