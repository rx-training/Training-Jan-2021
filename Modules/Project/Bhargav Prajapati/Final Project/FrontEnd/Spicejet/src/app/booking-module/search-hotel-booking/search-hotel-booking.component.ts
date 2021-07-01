import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hotelcridenctial } from 'src/app/Models/HotelCridential';
import { HotelBookingServiceService } from 'src/app/Services/HotelBookingervice/hotel-booking-service.service';

@Component({
  selector: 'app-search-hotel-booking',
  templateUrl: './search-hotel-booking.component.html',
  styleUrls: ['./search-hotel-booking.component.css']
})
export class SearchHotelBookingComponent implements OnInit {

  constructor( private fb:FormBuilder,private rout:Router,private service:HotelBookingServiceService)  { }

  conformationNumber:AbstractControl;
  Emails:AbstractControl;
  CheckinDetails:FormGroup;
  
  ngOnInit(): void {

    this.CheckinDetails=this.fb.group(
      {
        ConformationNumber:['',[Validators.required,Validators.maxLength(8),Validators.minLength(8)]],
        Email:['',[Validators.required,Validators.email]]
      }

      
    )
      this.conformationNumber=this.CheckinDetails.get('ConformationNumber');
      this.Emails=this.CheckinDetails.get('Email');

  }

  submitCheckIn()
  {
    let data:hotelcridenctial={ConformationCode:this.CheckinDetails.value.ConformationNumber,Email:this.CheckinDetails.value.Email}
    this.service.SendData1(data);
    this.rout.navigate(['Booking/UserBookingHotel']);
    
  }

}
