import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Searchhotel } from 'src/app/Models/HotelSearch';
import { HotelBookingServiceService } from 'src/app/Services/HotelBookingervice/hotel-booking-service.service';
import { HotelSearchServiceService } from 'src/app/Services/HotelSearchService/hotel-search-service.service';

@Component({
  selector: 'app-view-more-hotel-details',
  templateUrl: './view-more-hotel-details.component.html',
  styleUrls: ['./view-more-hotel-details.component.css']
})
export class ViewMoreHotelDetailsComponent implements OnInit {


  HotelId:number;
  HotelData:Array<Searchhotel>
  FilterById:Searchhotel={hotelName:"",amount:0,imgPath4:"",imgPath3:"",imgPath2:"",imgPath1:"",closingTime:"",contectId:0,costId:0,hotelAddress:"",hotelCity:"",hotelEmail:"",hotelId:0,hotelMobileNumber:0,hotelState:"",noOfRoomAvailable:0,pinNumber:0,rating:"",startingTime:"",tax:0,totelPrice:0};
  ImgSrc:string;
  constructor(private route:ActivatedRoute,private service1:HotelBookingServiceService,private router:Router,private readonly service:HotelSearchServiceService) { }
  ngOnInit(): void {

    this.HotelId= parseInt(this.route.snapshot.paramMap.get('id'));

    //console.log(this.HotelId);
    this.service.GetHotel().subscribe(
      (res:Array<Searchhotel>)=>{this.HotelData=res

        for (const iterator of this.HotelData)
        {
             if(iterator.hotelId==this.HotelId) 
             {
               this.FilterById=iterator;
               this.ImgSrc=iterator.imgPath1;
             }  
        }

        console.log(this.FilterById);
        

      }
    );

   
  }
  imgpath1()
  {
    this.ImgSrc=this.FilterById.imgPath1;
  }
  imgpath2()
  {
    this.ImgSrc=this.FilterById.imgPath2;
  }
  imgpath3()
  {
    this.ImgSrc=this.FilterById.imgPath3;
  }
  imgpath4()
  {
    this.ImgSrc=this.FilterById.imgPath4;
  }


  Back()
  {
    this.router.navigate(['Booking/Searchhotel']);
  }

  BookNow()
  {
    
      this.service1.SendData(this.FilterById);
      this.router.navigate(['Booking/HotelBooking'])
  }

}
