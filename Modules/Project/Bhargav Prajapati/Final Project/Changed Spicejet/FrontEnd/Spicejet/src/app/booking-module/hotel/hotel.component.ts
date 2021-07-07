import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { UserEnterHotelData } from 'src/app/ModelsSpicejet/UserEnterHotelData';
import { SearchHotelServiceService } from 'src/app/ServicesSpicejet/SearchHotelServices/search-hotel-service.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private service:SearchHotelServiceService) { }
  HotelBooking:FormGroup;
  DestinationCity:AbstractControl;
  CheckInDate:AbstractControl;
  CheckOutDate:AbstractControl;
  
  ngOnInit(): void {
    this.HotelBooking=this.fb.group({
      DestinationCity:['',[Validators.required,OnlyCharactorAllowed]],
      CheckInDate:['',Validators.required],
      CheckOutDate:['',Validators.required],
      
      
    });
    this.DestinationCity=this.HotelBooking.get('DestinationCity');
    this.CheckInDate=this.HotelBooking.get('CheckInDate');
    this.CheckOutDate=this.HotelBooking.get('CheckOutDate');
     }
  StoreData()
  {
    let HotelData:UserEnterHotelData={DestinationCity:this.HotelBooking.value.DestinationCity,CheckInDate:this.HotelBooking.value.CheckInDate,CheckoutDate:this.HotelBooking.value.CheckOutDate}
    this.service.StoringData(HotelData);
    this.router.navigate(['Booking/Searchhotel']);
  }

  MenageHotelBooking()
  {
    this.router.navigate(['Booking/SearchBooking']);
    
  }



}
