import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SearchedHotelData } from 'src/app/ModelsSpicejet/SearchHotelData';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';
import { SearchHotelServiceService } from 'src/app/ServicesSpicejet/SearchHotelServices/search-hotel-service.service';

@Component({
  selector: 'app-view-more-hotel-details',
  templateUrl: './view-more-hotel-details.component.html',
  styleUrls: ['./view-more-hotel-details.component.css']
})
export class ViewMoreHotelDetailsComponent implements OnInit {


  HotelId:number;
  HotelData:Array<SearchedHotelData>
  FilterById:SearchedHotelData={costId:0,amount:0,hotelAddress:"",hotelCity:"",hotelContectNumber:"",hotelEmailAddress:"",hotelId:0,hotelName:"",hotelState:"",imgPath1:"",imgPath2:"",imgPath3:"",imgPath4:"",listId:0,numberOfRoomAvailable:0,pinNumber:"",rating:"",tax:0,totelAmount:0};
  ImgSrc:string;
  constructor(private route:ActivatedRoute,private service1:HotelbookingserviceService,private router:Router,private readonly service:SearchHotelServiceService) { }
  ngOnInit(): void {

    this.HotelId= parseInt(this.route.snapshot.paramMap.get('id'));

    
    this.service.GetHotel().subscribe(
      (res:Array<SearchedHotelData>)=>{this.HotelData=res

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
    
      this.service1.StroreData(this.FilterById);
      this.router.navigate(['Booking/HotelBooking'])
  }

}
