import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/Models/CheckInDetails';
import { UserBookedFlightCrudService } from 'src/app/Services/UserFlightBooked/user-booked-flight-crud.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor( private fb:FormBuilder,private service:UserBookedFlightCrudService,private rout:Router)  { }

  PNRNumbers:AbstractControl;
  Emails:AbstractControl;
  CheckinDetails:FormGroup;
  
  ngOnInit(): void {

    this.CheckinDetails=this.fb.group(
      {
        PNRNumber:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        Email:['',[Validators.required,Validators.email]]
      }

      
    )
      this.PNRNumbers=this.CheckinDetails.get('PNRNumber');
      this.Emails=this.CheckinDetails.get('Email');

  }

  submitCheckIn()
  {
    console.log(this.CheckinDetails.value)
    let SendData:Data={PNRNumber:this.CheckinDetails.value.PNRNumber,EmailAddress:this.CheckinDetails.value.Email};
    console.log(SendData);
    this.service.StoringData(SendData);
    this.rout.navigate(['Booking/check-in-Details']);



    
  }

}



