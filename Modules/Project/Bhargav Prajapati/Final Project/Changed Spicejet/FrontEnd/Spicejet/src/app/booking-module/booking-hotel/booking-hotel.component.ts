import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';
import { SearchedHotelData } from 'src/app/ModelsSpicejet/SearchHotelData';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';
import { HotelDetailsService } from 'src/app/ServicesSpicejet/HotelDetails/hotel-details.service';

@Component({
  selector: 'app-booking-hotel',
  templateUrl: './booking-hotel.component.html',
  styleUrls: ['./booking-hotel.component.css']
})
export class BookingHotelComponent implements OnInit {

  constructor(private rout:Router,private service:HotelbookingserviceService,private fb:FormBuilder,private HotelDetailservice:HotelDetailsService) { }
   data:Array<SearchedHotelData>;
   HotelId:number;
   CostId:number;
   ContectId:number;
   HotelAddress:string;
   HOtelCity:string;
   HotelContectNumber:string;
   HotelEmailAddress:string;
   HotelName:string;
   HotelState:string;
   imgpath1:string;
   imgpath2:string;
   imgpath3:string;
   imgpath4:string;
   rating:string;
   noseatavalilabel:number;
   pinNumber:string;

   UserData:FormGroup;
   StoreData:UserBookingData;
   Totelperson;

   flag1:boolean=true;
   flag2:boolean=false;


 userfirstname:AbstractControl;
 usermiddlename:AbstractControl;
 userlastname:AbstractControl;
 useremail:AbstractControl;
 userPhoneNumber:AbstractControl;
 Guest:AbstractControl;

  ngOnInit(): void {
    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
      UserEmail:['',[Validators.required,Validators.email]],
      UserPhoneNumber:['',[Validators.required,OnlyDigitAllowed,Validators.maxLength(10),Validators.minLength(10)]],
      Guest:['',Validators.required]

      
    });
    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');
    this.Guest=this.UserData.get('Guest');

  
    this.data= this.service.SendData();
    console.log(this.data);

    

    for (const iterator of this.data) {
      this.HotelId=iterator.hotelId;
      this.CostId=iterator.costId;
      this.HotelAddress=iterator.hotelAddress;
       this.HOtelCity=iterator.hotelCity;
       this.HotelEmailAddress=iterator.hotelEmailAddress;
       this.HotelName=iterator.hotelName;
       this.HotelState=iterator.hotelState;
       this.imgpath1=iterator.imgPath1;
       this.imgpath2=iterator.imgPath2;
       this.imgpath3=iterator.imgPath3;
       this.imgpath4=iterator.imgPath4;
       this.pinNumber=iterator.pinNumber;
       this.rating=iterator.rating;
       this.noseatavalilabel=iterator.numberOfRoomAvailable;
       this.HotelContectNumber=iterator.hotelContectNumber
      
      
      
      

        }
      
     
     
     
    


  }

  letters:string = "ABCDEFGHJKMNPQRSTUXY1234567890abcdefghjkmnpqrstuxy";
  ConformationGeneration()
       {
       var text = "";
       for (var i = 0; i < 8; i++) {
         text += this.letters.charAt(Math.floor(Math.random() * this.letters.length));
       }
       return text;
     };

  StoreUserData()
  {
        let dateString = new Date(); 
        this.StoreData={
          bookingDateTime:new Date(dateString + ' UTC'),
          costId:this.CostId,
          hotelId:this.HotelId,
          userFirstName:this.UserData.value.UserFirstName,
          userMiddleName:this.UserData.value.UserMiddleName,
          userLastName:this.UserData.value.UserLastName,
          numberOfGuest:this.UserData.value.Guest,
          userConformationNumber:this.ConformationGeneration(),
          userContactNumber:this.UserData.value.UserPhoneNumber,
          userEmailAddress:this.UserData.value.UserEmail

        }
        
        this.Totelperson=this.UserData.value.Guest;
        this.flag1=false;
        this.flag2=true; 

  }
  MakePayment()
  {
    let cnt=this.noseatavalilabel-this.Totelperson;
    let hotelDetails:HotelDetails={
        hotelId:this.HotelId,
        hotelAddress:this.HotelAddress,
        hotelCity:this.HOtelCity,
        hotelContectNumber:this.HotelContectNumber,
        hotelEmailAddress:this.HotelEmailAddress,
        hotelName:this.HotelName,
        hotelState: this.HotelState,
        imgPath1:this.imgpath1,
        imgPath2:this.imgpath2,
        imgPath3:this.imgpath3,
        imgPath4:this.imgpath4,
        rating:this.rating,
        pinNumber:this.pinNumber,
        numberOfRoomAvailable:cnt        

    }
    console.log(hotelDetails);
   this.service.InsertBooking(this.StoreData).subscribe(
     (res)=>{console.log(res)},
     (err)=>{console.log(err)}
   );
   this.HotelDetailservice.UpdateHotel(hotelDetails,this.HotelId).subscribe(
     (res)=>{console.log(res)},
     (err)=>{console.log(err)}
   );

    alert("Hotel is Booked Successfully Your Conformation code are send on your mail");


    this.rout.navigate(['Booking/Hotel']);

  }



  

}


 