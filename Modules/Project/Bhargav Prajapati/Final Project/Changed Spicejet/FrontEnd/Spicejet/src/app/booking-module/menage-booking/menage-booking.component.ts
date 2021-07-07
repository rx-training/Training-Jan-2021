import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchedUserData } from 'src/app/ModelsSpicejet/SearchedUserDate';
import { SearchBookingService } from 'src/app/ServicesSpicejet/SearchBooking/search-booking.service';

@Component({
  selector: 'app-menage-booking',
  templateUrl: './menage-booking.component.html',
  styleUrls: ['./menage-booking.component.css']
})
export class MenageBookingComponent implements OnInit {

  constructor( private fb:FormBuilder,private rout:Router,private serviceb:SearchBookingService)  { }

  PNRNumber:AbstractControl;
  Email:AbstractControl;
  BookingDetails:FormGroup;
  ngOnInit(): void {

    this.BookingDetails=this.fb.group(
      {
        PNRNumber:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        Email:['',[Validators.required,Validators.email]]
      }

      
    )
      this.PNRNumber=this.BookingDetails.get('PNRNumber');
      this.Email=this.BookingDetails.get('Email');

      

  }

  submitBooking()
  {

    let SendData:SearchedUserData={PnrNumber:this.BookingDetails.value.PNRNumber,EmailAddress:this.BookingDetails.value.Email};
    this.serviceb.StoreData(SendData);
    this.rout.navigate(['Booking/MenageBookingDetails']);
  }

}
