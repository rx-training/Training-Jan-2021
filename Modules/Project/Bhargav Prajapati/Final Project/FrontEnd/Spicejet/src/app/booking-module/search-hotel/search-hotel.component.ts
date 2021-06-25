import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Searchhotel } from 'src/app/Models/HotelSearch';
import { SearchedHotelData } from 'src/app/Models/searchedhoteldata';
import { HotelSearchServiceService } from 'src/app/Services/HotelSearchService/hotel-search-service.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  constructor(private readonly service:HotelSearchServiceService,private router:Router) { }

  data:Array<Searchhotel>=[]
  userdata:Array<SearchedHotelData>=[]
  DestinationCity:string;
  CheckinDate:Date;
  CheckOutDate:Date; 
  FilterHotel:Array<Searchhotel>=[];
  ngOnInit(): void {

    this.service.GetHotel().subscribe(
      ((res:Array<Searchhotel>)=>{
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
       
       this.FilterHotel.push(iterator);
      
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
