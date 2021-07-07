import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';
import { SearchBooking } from 'src/app/ModelsSpicejet/SearchBooking';
import { SearchedUserData } from 'src/app/ModelsSpicejet/SearchedUserDate';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';
import { SearchBookingService } from 'src/app/ServicesSpicejet/SearchBooking/search-booking.service';

@Component({
  selector: 'app-menage-booking-details',
  templateUrl: './menage-booking-details.component.html',
  styleUrls: ['./menage-booking-details.component.css']
})
export class MenageBookingDetailsComponent implements OnInit {

  constructor(private serviceb:SearchBookingService,private service:FlightBookingService,private rout:Router,private fb:FormBuilder,private cdr: ChangeDetectorRef) { }

  UserBookingnData:Array<SearchedUserData>;
  UserPNRNumber:string;
  UserEmail:string;
  ShowData:Array<SearchBooking>;

  UserData:FormGroup;


  

 userfirstname:AbstractControl;
 usermiddlename:AbstractControl;
 userlastname:AbstractControl;
 useremail:AbstractControl;
 userPhoneNumber:AbstractControl;



  flag1:boolean=false;
  flag2:boolean=true;

  ngOnInit(): void {




    this.UserBookingnData=this.serviceb.ShowData();
    console.log(this.UserBookingnData);
    for (const iterator of this.UserBookingnData)
    {
        this.UserPNRNumber=iterator.PnrNumber;
        this.UserEmail=iterator.EmailAddress;      
    }

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[OnlyCharactorAllowed]],
      UserLastName:['',[OnlyCharactorAllowed]],
      UserEmail:['',[Validators.email]],
      UserPhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
    });


    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');


    this.getData();
   
  }

 
 getData()
 {
  this.serviceb.GetBookingByPnrNumber(this.UserPNRNumber).subscribe(
    (res:Array<SearchBooking>)=>{this.ShowData=res
    console.log(this.ShowData);
    for (const iterator of  this.ShowData) {
      
      
    }
  if(this.ShowData.length!=0)
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
    this.rout.navigate(['Booking/MenageBooking']);
  }

  Delete(UserId:number)
  {
     if(confirm("Are You Sure You Want To Delete Booking"))
    {
      
        this.service.DeleteBooking(UserId).subscribe(
          (res)=>{
            console.log(res);
            this.getData();
          },
          (err)=>{
            console.log(err);
            this.getData();
            
          }
        );
        alert("Successfully Deleted Your Flight");
      
       
     }
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

  ufirstname="";
  umiddlename="";
  ulastname="";
  uemail="";
  uphonenumber=916832759;
  UserId=0;
  pnrnumber="";
  airplaneId=0;
  costId=0;
  tripId=0;
  bookingdatetime:Date;
 


  Update(item:SearchBooking)
  {
    this.ufirstname=item.userFirstName;
    this.umiddlename=item.userMiddleName;
    this.ulastname=item.userLastName;
    this.uemail=item.userEmail;
    this.uphonenumber=item.userContactNumber;
    this.UserId=item.userId;
    this.pnrnumber=item.pnrNumber;
    this.airplaneId=item.airplaneId;
    this.costId=item.costId;
    this.tripId=item.tripId;
    this.bookingdatetime=item.bookingDateTime;
  }

  Save()
  {
    if(confirm("Are You Sure Update Your Details"))
    {
     let Data:UserDetails={pnrNumber:this.pnrnumber,userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,userEmail:this.UserData.value.UserEmail,userContactNumber:this.UserData.value.UserPhoneNumber,airplaneId:this.airplaneId,costId:this.costId,tripId:this.tripId,bookingDateTime:this.bookingdatetime,userId:this.UserId}
     this.service.UpdateBooking(this.UserId,Data).subscribe(
       (res)=>{
         console.log(res);
         this.getData();

       },
       (err)=>
       {
          console.log(err);
          this.getData();
       }
     )
      
      alert("Your Data is SuccessFully Updated");
     
    }
  }

}
