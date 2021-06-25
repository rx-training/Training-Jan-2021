import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { Searchhotel } from 'src/app/Models/HotelSearch';
import { UserHotelData } from 'src/app/Models/UserHotelDetails';
import { HotelBookingServiceService } from 'src/app/Services/HotelBookingervice/hotel-booking-service.service';
import { HotelSearchServiceService } from 'src/app/Services/HotelSearchService/hotel-search-service.service';

@Component({
  selector: 'app-booking-hotel',
  templateUrl: './booking-hotel.component.html',
  styleUrls: ['./booking-hotel.component.css']
})
export class BookingHotelComponent implements OnInit {

  constructor(private rout:Router,private service:HotelBookingServiceService,private fb:FormBuilder,private service1:HotelSearchServiceService) { }
   data:Array<Searchhotel>;
   HotelId:number;
   CostId:number;
   ContectId:number;
   UserData:FormGroup;
   StoreData:UserHotelData;
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

    this.data= this.service.GetData();
    console.log(this.data);
    for (const iterator of this.data) {
      this.HotelId=iterator.hotelId;
      this.CostId=iterator.hotelId;
      this.ContectId=iterator.contectId;
      

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

        this.StoreData={userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,numberOfGuest:this.UserData.value.Guest,userContectNumber:this.UserData.value.UserPhoneNumber,userEmail:this.UserData.value.UserEmail,userReferenceNumumbar:this.ConformationGeneration(),contectId:this.ContectId,costId:this.CostId,hotelId:this.HotelId}
        this.flag1=false;
        this.flag2=true;


  }
  MakePayment()
  {
    this.service.InsertData(this.StoreData).subscribe
    ((res)=>{console.log(res)},
    (err)=>{console.log(err)});

    alert("Hotel is Booked Successfully Your Conformation code are send on your mail");


    this.rout.navigate(['Booking/Hotel']);

  }



  

}


 