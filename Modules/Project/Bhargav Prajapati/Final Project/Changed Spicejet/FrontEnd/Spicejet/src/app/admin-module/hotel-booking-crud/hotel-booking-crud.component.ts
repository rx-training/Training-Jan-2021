import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';

@Component({
  selector: 'app-hotel-booking-crud',
  templateUrl: './hotel-booking-crud.component.html',
  styleUrls: ['./hotel-booking-crud.component.css']
})
export class HotelBookingCrudComponent implements OnInit {

  constructor(private router:Router,private service:HotelbookingserviceService,private fb:FormBuilder,private cdr: ChangeDetectorRef) { }

  HotelBooking:Array<UserBookingData>
  userfirstname:AbstractControl;
  usermiddlename:AbstractControl;
  userlastname:AbstractControl;
  useremail:AbstractControl;
  userPhoneNumber:AbstractControl;
  Guest:AbstractControl;
  UserData:FormGroup;
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
    this.Guest=this.UserData.get('Guest');



    this.getAllBooking();
  }

  getAllBooking()
  {
    this.service.GetAllBooking().subscribe
    (
      (res:Array<UserBookingData>)=>{this.HotelBooking=res},
      (err)=>{
        console.log(err);
        if(err.status)
        {
         
          sessionStorage.removeItem('token');
          this.router.navigateByUrl('404');
         
        }
      }
    )
  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  ufirstname="";
  umiddlename="";
  ulastname="";
  uemail="";
  uphonenumber="";
  guest=0;
  costId: number;
  hotelId:number;
 BookingDatetime:Date;
 conformationcode:string; 
  userId?:number;
  Edit(item:UserBookingData)
  {
      this.ufirstname=item.userFirstName;
      this.umiddlename=item.userMiddleName;
      this.ulastname=item.userLastName;
      this.uemail=item.userEmailAddress;
      this.uphonenumber=item.userContactNumber;
      this.guest=item.numberOfGuest;
      this.costId=item.costId;
      this.conformationcode=item.userConformationNumber;
      this.userId=item.userId;
      this.BookingDatetime=item.bookingDateTime;

  }
  UpdateRrcord(){
    let updatedata:UserBookingData=
    {userFirstName:this.UserData.value.UserFirstName,
      userMiddleName:this.UserData.value.UserMiddleName,
      userLastName:this.UserData.value.UserLastName,
      userEmailAddress:this.UserData.value.UserEmail,
      userContactNumber:this.UserData.value.UserPhoneNumber,
      numberOfGuest:this.UserData.value.Guest,
      userConformationNumber:this.conformationcode,
      costId:this.costId,
      hotelId:this.hotelId,
      userId:this.userId,
      bookingDateTime:this.BookingDatetime
    }

    this.service.UpdateBooking(updatedata,this.userId).subscribe(
      (res)=>{
        console.log(res);
        this.getAllBooking();
      },
      (err)=>{
        console.log(err);
        this.getAllBooking();
      }
    );
  }

  Delete(userId:number)
  {
    if(confirm("Are You sure You want To Delete Flight?"))
    {
      this.service.DeleteBooking(userId).subscribe(
        (res)=>{
          console.log(res);
          this.getAllBooking();
        },
        (err)=>
        {
          console.log(err);
          this.getAllBooking();
        }
      )
     }
}

}
