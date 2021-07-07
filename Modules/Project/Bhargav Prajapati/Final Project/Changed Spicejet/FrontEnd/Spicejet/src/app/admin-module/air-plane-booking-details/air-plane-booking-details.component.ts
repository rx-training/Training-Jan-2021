import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, interval, Observable} from 'rxjs';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';

@Component({
  selector: 'app-air-plane-booking-details',
  templateUrl: './air-plane-booking-details.component.html',
  styleUrls: ['./air-plane-booking-details.component.css']
})
export class AirPlaneBookingDetailsComponent implements OnInit {

  constructor(private router:Router,private service:FlightBookingService,private cdr: ChangeDetectorRef,private fb:FormBuilder) { }
 
  UserData:FormGroup;
  Booking:Array<UserDetails>

  userfirstname:AbstractControl;
  usermiddlename:AbstractControl;
  userlastname:AbstractControl;
  useremail:AbstractControl;
  userphonenumber:AbstractControl;

  referenceflight=new BehaviorSubject<boolean>(true);
  ngOnInit(): void {
    this.UserData=this.fb.group(
      {
           UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
           UserMiddleName:['',[OnlyCharactorAllowed]],
           UserLastName:['',[OnlyCharactorAllowed]],
           UserEmail:['',[Validators.email]],
           UserPhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]] 
      }
      
    )
    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userphonenumber=this.UserData.get('UserPhoneNumber');

      this.GetFlight(); 

      

  }

  GetFlight()
  {

    this.service.GetAllBooking().subscribe(
      (res:Array<UserDetails>)=>{this.Booking=res},
      (err)=>{
        
        console.log(err);
          

      if(err.status)
      {
       
        sessionStorage.removeItem('token');
        this.router.navigateByUrl('404');
       
      }
      }
    );
  }

  DeleteFlight(UserId:number)
  {
    if(confirm("Are You Sure You Want TO Delete Booking"))
    {
    this.service.DeleteBooking(UserId).subscribe(
      (res)=>{
        this.GetFlight();
      },
      (err)=>{
        console.log(err)
        this.GetFlight();
      }
    );
  
    
  }
  
}
ngAfterViewChecked(){
  //your code to update the model
  this.cdr.detectChanges();
}

ufname="";
umname="";
ulastname="";
uemail="";
uphonenumber="";
AirplaneId=0;
CostId=0;
TravelId=0;
PnrNumber="";
BookingDateTime:Date;
uid=0
UpdateFlight(data:UserDetails)
{
    this.uid=data.userId
    this.ufname=data.userFirstName;
    this.umname=data.userMiddleName;
    this.ulastname=data.userLastName;
    this.uemail=data.userEmail;
    this.uphonenumber=data.userContactNumber;
    this.AirplaneId=data.airplaneId;
    this.CostId=data.costId;
    this.TravelId=data.tripId;
    this.PnrNumber=data.pnrNumber;
    this.BookingDateTime=data.bookingDateTime;


}
Save()
{

      let updateddata:UserDetails={
        userFirstName:this.ufname,
        userLastName:this.ulastname,
        userMiddleName:this.umname,
        userEmail:this.uemail,
        userContactNumber:this.uphonenumber,
        airplaneId:this.AirplaneId,
        costId:this.CostId,
        tripId:this.TravelId,
        pnrNumber:this.PnrNumber,
        bookingDateTime:this.BookingDateTime


      }

      this.service.UpdateBooking(this.uid,updateddata).subscribe(
        (res)=>{
            
          console.log(res);
          this.GetFlight()
         
        },
        (err)=>{
          
          console.log(err)
          this.GetFlight();
          
          
        }
      );

      
      
      
}

}
