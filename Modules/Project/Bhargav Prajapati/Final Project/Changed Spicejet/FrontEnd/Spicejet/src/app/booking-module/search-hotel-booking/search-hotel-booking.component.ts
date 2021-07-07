import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageHotelUserData } from 'src/app/ModelsSpicejet/MenageHotelUserData';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';

@Component({
  selector: 'app-search-hotel-booking',
  templateUrl: './search-hotel-booking.component.html',
  styleUrls: ['./search-hotel-booking.component.css']
})
export class SearchHotelBookingComponent implements OnInit {

  constructor( private fb:FormBuilder,private rout:Router,private service:HotelbookingserviceService)  { }

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
    let data:ManageHotelUserData={ConformationCode:this.CheckinDetails.value.ConformationNumber,Email:this.CheckinDetails.value.Email}
    //console.log(data)
    this.service.storedata1(data);
    this.rout.navigate(['Booking/UserBookingHotel']);
    
  }

}
