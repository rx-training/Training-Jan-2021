import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchBooking } from 'src/app/ModelsSpicejet/SearchBooking';
import { SearchedUserData } from 'src/app/ModelsSpicejet/SearchedUserDate';
import { SearchBookingService } from 'src/app/ServicesSpicejet/SearchBooking/search-booking.service';

@Component({
  selector: 'app-check-in-details',
  templateUrl: './check-in-details.component.html',
  styleUrls: ['./check-in-details.component.css']
})
export class CheckInDetailsComponent implements OnInit{

  constructor(private rout:Router,private serviceb:SearchBookingService) { }
 

  UserCheckInData:Array<SearchedUserData>;
  UserPNRNumber:string;
  UserEmail:string;
  ShowData:Array<SearchBooking>;

 


 
  flag1:boolean=false;
  flag2:boolean=true;
  ngOnInit(): void 
  {
    this.UserCheckInData=this.serviceb.ShowData();
    console.log(this.UserCheckInData);
    for (const iterator of this.UserCheckInData)
    {
        this.UserPNRNumber=iterator.PnrNumber;
        this.UserEmail=iterator.EmailAddress;      
    }


    this.serviceb.GetBookingByPnrNumber(this.UserPNRNumber).subscribe(
      (res:Array<SearchBooking>)=>{this.ShowData=res
      console.log(this.ShowData)
    if(this.ShowData.length !=0)
    {
 
    this.flag1=true;
    this.flag2=false;
  }
  else
  {
    this.flag2=true;
    this.flag1=false;
  }



     },
      (err)=>{
        console.log(err);
       
      }
    );

    

  }
  
  Back()
  {
    this.rout.navigate(['Booking/check-in']);
  }
  
  
    
  }


