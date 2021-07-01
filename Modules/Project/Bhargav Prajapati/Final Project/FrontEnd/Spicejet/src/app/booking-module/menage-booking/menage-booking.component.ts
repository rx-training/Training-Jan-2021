import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from 'src/app/Models/CheckInDetails';
import { UserBookedFlightCrudService } from 'src/app/Services/UserFlightBooked/user-booked-flight-crud.service';

@Component({
  selector: 'app-menage-booking',
  templateUrl: './menage-booking.component.html',
  styleUrls: ['./menage-booking.component.css']
})
export class MenageBookingComponent implements OnInit {

  constructor( private fb:FormBuilder,private rout:Router,private service:UserBookedFlightCrudService)  { }

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

    let SendData:Data={PNRNumber:this.BookingDetails.value.PNRNumber,EmailAddress:this.BookingDetails.value.Email};
    this.service.StoringData(SendData);
    this.rout.navigate(['Booking/MenageBookingDetails']);
  }

}
