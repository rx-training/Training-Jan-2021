import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { SearchedHotelData } from 'src/app/Models/searchedhoteldata';
import { HotelSearchServiceService } from 'src/app/Services/HotelSearchService/hotel-search-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private service:HotelSearchServiceService) { }
  HotelBooking:FormGroup;
  DestinationCity:AbstractControl;
  CheckInDate:AbstractControl;
  CheckOutDate:AbstractControl;
  // Guest:AbstractControl;
  
  ngOnInit(): void {
    this.HotelBooking=this.fb.group({
      DestinationCity:['',[Validators.required,OnlyCharactorAllowed]],
      CheckInDate:['',Validators.required],
      CheckOutDate:['',Validators.required],
      // Guest:['',Validators.required]

      
    });
    this.DestinationCity=this.HotelBooking.get('DestinationCity');
    this.CheckInDate=this.HotelBooking.get('CheckInDate');
    this.CheckOutDate=this.HotelBooking.get('CheckOutDate');
   // this.Guest=this.HotelBooking.get('Guest');
  }
  StoreData()
  {
    let HotelData:SearchedHotelData={DestinationCity:this.HotelBooking.value.DestinationCity,CheckInDate:this.HotelBooking.value.CheckInDate,CheckoutDate:this.HotelBooking.value.CheckOutDate}
    this.service.StoringData(HotelData);

    this.router.navigate(['Booking/Searchhotel']);
    
    
  }

  MenageHotelBooking()
  {
    this.router.navigate(['Booking/SearchBooking']);
    
  }



}
