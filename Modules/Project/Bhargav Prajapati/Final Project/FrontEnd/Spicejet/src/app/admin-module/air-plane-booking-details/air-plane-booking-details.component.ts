import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, interval, Observable} from 'rxjs';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { AirplaneBookingCrud } from 'src/app/Models/AirplaneBookingCrud';
import { AirplaneBookingCrudService } from 'src/app/Services/AirplaneBookingCrud/airplane-booking-crud.service';

@Component({
  selector: 'app-air-plane-booking-details',
  templateUrl: './air-plane-booking-details.component.html',
  styleUrls: ['./air-plane-booking-details.component.css']
})
export class AirPlaneBookingDetailsComponent implements OnInit {

  constructor(private service:AirplaneBookingCrudService,private cdr: ChangeDetectorRef,private fb:FormBuilder) { }
 
  UserData:FormGroup;
  Booking:Array<AirplaneBookingCrud>

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
           UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
           UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
           UserEmail:['',[Validators.required,Validators.email]],
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
      (res:Array<AirplaneBookingCrud>)=>{this.Booking=res},
      (err)=>{console.log(err)}
    );
  }

  DeleteFlight(pnrNumber:string)
  {
    if(confirm("Are You Sure You Want TO Delete Booking"))
    {
    this.service.DeleteBooking(pnrNumber).subscribe(
      (res)=>{
        console.log(res);
        
      },
      (err)=>{
        console.log(err)
        this.Booking.splice(this.Booking.indexOf(this.Booking.filter(s=>s.pnrnumber==pnrNumber)[0]),1)}
    );
  
    
  }
  
}
ngAfterViewChecked(){
  //your code to update the model
  this.cdr.detectChanges();
}

ufname="xcv";
umname="xvf";
ulastname="dxfg";
uemail="sdfdfgd";
uphonenumber=1234567890;
AirplaneId=0;
CostId=0;
TravelId=0;
PnrNumber="dcd"
UpdateFlight(data:AirplaneBookingCrud)
{
    this.ufname=data.userFirstName;
    this.umname=data.userMiddleName;
    this.ulastname=data.userLastName;
    this.uemail=data.userEmail;
    this.uphonenumber=data.userPhoneNumber;
    this.AirplaneId=data.airPlaneId;
    this.CostId=data.costId;
    this.TravelId=data.travelId;
    this.PnrNumber=data.pnrnumber;

}
Save()
{

      let updateddata:AirplaneBookingCrud={
        userFirstName:this.ufname,
        userLastName:this.ulastname,
        userMiddleName:this.umname,
        userEmail:this.uemail,
        userPhoneNumber:this.uphonenumber,
        airPlaneId:this.AirplaneId,
        costId:this.CostId,
        travelId:this.TravelId,
        pnrnumber:this.PnrNumber,


      }

      this.service.UpdateBooking(this.PnrNumber,updateddata).subscribe(
        (res)=>{
            console.log("success")
          this.GetFlight()
          console.log(res)
          ;
          
         
        },
        (err)=>{
          
          console.log(err)
          this.GetFlight();
          
          
        }
      );

      
      
      
}

}
