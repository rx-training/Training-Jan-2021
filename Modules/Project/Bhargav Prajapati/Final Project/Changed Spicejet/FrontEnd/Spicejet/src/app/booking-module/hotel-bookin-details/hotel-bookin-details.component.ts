import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';
import { ManageHotelUserData } from 'src/app/ModelsSpicejet/MenageHotelUserData';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { viewhotelbooking } from 'src/app/ModelsSpicejet/viewHotelBooking';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';

@Component({
  selector: 'app-hotel-bookin-details',
  templateUrl: './hotel-bookin-details.component.html',
  styleUrls: ['./hotel-bookin-details.component.css']
})
export class HotelBookinDetailsComponent implements OnInit {

  constructor(private service:HotelbookingserviceService,private fb:FormBuilder,private router:Router,private cdr: ChangeDetectorRef) { }

  flag1:boolean=false;
  flag2:boolean=true;
  data:Array<ManageHotelUserData>;
  
 UserConformation:string;
 UserEmail:string; 
  retrivedata:viewhotelbooking;


  UserData:FormGroup;
  userfirstname:AbstractControl;
  usermiddlename:AbstractControl;
  userlastname:AbstractControl;
  useremail:AbstractControl;
  guest:AbstractControl;
  userPhoneNumber:AbstractControl;
  ngOnInit(): void {

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
      UserEmail:['',[Validators.required,Validators.email]],
      UserPhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      Guest:['',Validators.required]
    });


    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');
    this.guest=this.UserData.get('Guest');

    this.data=this.service.sendData1();
    for (const iterator of this.data) 
    {
        this.UserConformation=iterator.ConformationCode;
        this.UserEmail=iterator.Email;  
        
    }
   this.GetData();
  }

  hotelId:number;
  hotelAddress:string;
  hotelCity:string;
  hotelContectNumber:string;
  hotelEmailAddress:string;
  hotelName:string;
  hotelState:string;
  imgPath1:string;
  imgPath2:string;
  imgPath3:string;
  imgPath4:string;
  pinNumber:string;
  rating:string;
  numberOfRoomAvailable:number;
  noofgust:number;
  GetData()
  {
    this.service.GetUserByConformation(this.UserConformation).subscribe(
      (res:viewhotelbooking)=>{
        this.retrivedata=res
        
        

        if(this.retrivedata!=null)
        {
          this.flag1=true;
          this.flag2=false;
        }
        else
        {
          this.flag1=false;
          this.flag2=true;

        }
      
      },
      (err)=>{console.log(err)}
    )
  }
  
Back()
{
  this.router.navigate(['Booking/SearchBooking'])
}
Delete(data)
{
  if(confirm("Are You Sure You Want To Delete Flight"))
  {
   

 
   
    this.service.DeleteBooking(data).subscribe(
      (res)=>{
        console.log(res)
        alert("your Hotel is successfully Deleted ");
        this.router.navigate(['Booking/SearchBooking'])

      },
      (err)=>{
        console.log(err)
        alert("your Hotel is successfully Deleted ");
        this.router.navigate(['Booking/SearchBooking'])

      }
    )
        
    
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
uphonenumber="";
noofguest=0;
bookingdatetime:Date;
uconformation:"";
cid=0;
hid=0
uid=0;
Update()
{
    this.ufirstname=this.retrivedata[0].userFirstName;
    this.umiddlename=this.retrivedata[0].userMiddleName;
    this.ulastname=this.retrivedata[0].userLastName;
    this.uemail=this.retrivedata[0].userEmailAddress;
    this.uphonenumber=this.retrivedata[0].userContactNumber;
    this.noofguest=this.retrivedata[0].numberOfGuest;
    this.bookingdatetime=this.retrivedata[0].bookingDateTime;
    this.uconformation=this.retrivedata[0].userConformationNumber
    this.cid=this.retrivedata[0].costId
    this.hid=this.retrivedata[0].hotelId
    this.uid=this.retrivedata[0].userId

}

SaveChanges()
{
  let data:UserBookingData={userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,numberOfGuest:this.UserData.value.Guest,userEmailAddress:this.UserData.value.UserEmail,userContactNumber:this.UserData.value.UserPhoneNumber,bookingDateTime:this.bookingdatetime,userConformationNumber:this.uconformation,costId:this.cid,hotelId:this.hid,userId:this.uid}
     if(confirm("Are You Sure Update Your Data"))
   {
    this.service.UpdateBooking(data,this.uid).subscribe(
      (res)=>{
        console.log(res);
        this.GetData();
      },
      (err)=>{
        console.log(err);
        this.GetData();
      }
    );
     alert("Suceessfully Updated Your Recored");
   
   } 
}

}
