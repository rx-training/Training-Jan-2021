import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchedHotelData } from 'src/app/ModelsSpicejet/SearchHotelData';
import { UserEnterHotelData } from 'src/app/ModelsSpicejet/UserEnterHotelData';
import { SearchHotelServiceService } from 'src/app/ServicesSpicejet/SearchHotelServices/search-hotel-service.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private readonly service:SearchHotelServiceService,private router:Router) { }

  data:Array<SearchedHotelData>=[]
  userdata:Array<UserEnterHotelData>=[]
  DestinationCity:string;
  CheckinDate:Date;
  CheckOutDate:Date; 
  FilterHotel:Array<SearchedHotelData>=[];
  ngOnInit(): void {

    this.service.GetHotel().subscribe(
      ((res:Array<SearchedHotelData>)=>{
        this.data=res;
        console.log(this.data);
        for (const iterator of this.userdata) 
  {
      this.DestinationCity=iterator.DestinationCity;
      this.CheckinDate=iterator.CheckInDate;
      this.CheckOutDate=iterator.CheckoutDate;
      
  }
    this.FilterHotel=[];
  for (const iterator of this.data)
  {
    
     if(iterator.hotelCity==this.DestinationCity)
     {
       if(iterator.numberOfRoomAvailable>3)
       {


       this.FilterHotel.push(iterator);
      }
      
      } 
  }
  console.log(this.FilterHotel);
      }),
      (err)=>{console.log(err)}
    );


  this.userdata=this.service.showdata();

  }


  Back()
  {
    this.router.navigate(['Booking/Hotel']);
  }

 

}
