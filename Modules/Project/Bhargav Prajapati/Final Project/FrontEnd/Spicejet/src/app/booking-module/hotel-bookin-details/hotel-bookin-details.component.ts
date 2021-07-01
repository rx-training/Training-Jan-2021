import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { hotelcridenctial } from 'src/app/Models/HotelCridential';
import { BookedHotelUserData } from 'src/app/Models/UserHotelBookingData';
import { UserHotelData } from 'src/app/Models/UserHotelDetails';
import { HotelBookingServiceService } from 'src/app/Services/HotelBookingervice/hotel-booking-service.service';

@Component({
  selector: 'app-hotel-bookin-details',
  templateUrl: './hotel-bookin-details.component.html',
  styleUrls: ['./hotel-bookin-details.component.css']
})
export class HotelBookinDetailsComponent implements OnInit {

  constructor(private service:HotelBookingServiceService,private fb:FormBuilder,private router:Router,private cdr: ChangeDetectorRef) { }

  flag1:boolean=false;
  flag2:boolean=true;
  data:Array<hotelcridenctial>;
  
 UserConformation:string;
 UserEmail:string; 
  retrivedata:BookedHotelUserData;


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

    this.data=this.service.GetData1();
    for (const iterator of this.data) 
    {
        this.UserConformation=iterator.ConformationCode;
        this.UserEmail=iterator.Email;  
    }

    this.service.GetUserByConformation(this.UserConformation,this.UserEmail).subscribe(
      (res:BookedHotelUserData)=>{
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
    this.service.DeleteData(data).subscribe(
      (res)=>{console.log(res)
        

      },
      (err)=>{console.log(err)}
    )

    alert("your Hotel is successfully Deleted ");
        this.router.navigate(['Booking/SearchBooking'])

    
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
uphonenumber=1234567890;
noofguest=0;

Update()
{
    this.ufirstname=this.retrivedata.userFirstName;
    this.umiddlename=this.retrivedata.userMiddleName;
    this.ulastname=this.retrivedata.userLastName;
    this.uemail=this.retrivedata.userEmail;
    this.uphonenumber=this.retrivedata.userContectNumber;
    this.noofguest=this.retrivedata.numberOfGuest;

}

SaveChanges()
{
  let data:UserHotelData={userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,userContectNumber:this.UserData.value.UserPhoneNumber,userEmail:this.UserData.value.UserEmail,numberOfGuest:this.UserData.value.Guest,userReferenceNumumbar:this.retrivedata.userReferenceNumumbar,contectId:this.retrivedata.contectId,hotelId:this.retrivedata.hotelId,costId:this.retrivedata.costId}
  console.log(data)
   if(confirm("Are You Sure Update Your Data"))
   {
     this.service.UpdateRecord(this.retrivedata.userReferenceNumumbar,data).subscribe(
       (res)=>{console.log(res)},
       (err)=>{console.log(err)}
     );
     alert("Suceessfully Updated Your Recored");
     this.router.navigate(['Booking/SearchBooking'])
   } 
}

}
