import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchedUserData } from 'src/app/ModelsSpicejet/SearchedUserDate';
import { SearchBookingService } from 'src/app/ServicesSpicejet/SearchBooking/search-booking.service';
@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor( private fb:FormBuilder,private service:SearchBookingService,private rout:Router)  { }

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
    let SendData:SearchedUserData={PnrNumber:this.CheckinDetails.value.PNRNumber,EmailAddress:this.CheckinDetails.value.Email};
    this.service.StoreData(SendData);
    this.rout.navigate(['Booking/check-in-Details']);
  }

}



