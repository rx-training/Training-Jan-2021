import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { FlightBooking } from 'src/app/Models/BookingFlight';
import { Data } from 'src/app/Models/CheckInDetails';
import { UserBookedFlightCrudService } from 'src/app/Services/UserFlightBooked/user-booked-flight-crud.service';

@Component({
  selector: 'app-menage-booking-details',
  templateUrl: './menage-booking-details.component.html',
  styleUrls: ['./menage-booking-details.component.css']
})
export class MenageBookingDetailsComponent implements OnInit {

  constructor(private service:UserBookedFlightCrudService,private rout:Router,private fb:FormBuilder,private cdr: ChangeDetectorRef) { }

  UserBookingnData:Array<Data>;
  UserPNRNumber:string;
  UserEmail:string;
  ShowData:any;

  UserData:FormGroup;


  AirPlaneName:string;
  Model:string;
  PNRNumber:string;
  UserFirstName:string;
  UserMiddleName:string;
  UserLastame:string;
  UserEmaill:string;
  UserPhoneNumber:number;
  Amount:number;
  Tax:number;
  totelAmount:number;
  ArrivedCity:string;
  DepatureCity:string;
  ArrivedAirportName:string;
  DepartAirPortName:string;
  DepartDate:Date;
  ArrivedDate:Date;
  DepartTime:string;
  ArrivedTime:string;
  AirPLaneId:number;
  CostId:number;
  TravelId:number




 userfirstname:AbstractControl;
 usermiddlename:AbstractControl;
 userlastname:AbstractControl;
 useremail:AbstractControl;
 userPhoneNumber:AbstractControl;



  flag1:boolean=false;
  flag2:boolean=true;

  ngOnInit(): void {




    this.UserBookingnData=this.service.showdata();
    console.log(this.UserBookingnData);
    for (const iterator of this.UserBookingnData)
    {
        this.UserPNRNumber=iterator.PNRNumber;
        this.UserEmail=iterator.EmailAddress;      
    }

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
      UserEmail:['',[Validators.required,Validators.email]],
      UserPhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]]
    });


    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');


    this.service.GetDataById(this.UserPNRNumber,this.UserEmail).subscribe(
      (res)=>{this.ShowData=res
      console.log(this.ShowData)
    if(this.ShowData !=null)
    {
    this.UserFirstName=this.ShowData.userFirstName; 
    this.UserMiddleName=this.ShowData.userMiddleName ;
    this.UserLastame=this.ShowData.userLastName ;
    this.PNRNumber=this.ShowData.pnrnumber;
    this.UserEmaill=this.ShowData.userEmail;
    this.UserPhoneNumber=this.ShowData.userPhoneNumber;
    this.AirPlaneName=this.ShowData.airPlaneName;
    this.Model=this.ShowData.model;
    this.Amount=this.ShowData.amout;
    this.Tax=this.ShowData.tex;
    this.totelAmount=this.ShowData.totelAmount;
    this.DepatureCity=this.ShowData.depatureCity;
    this.ArrivedCity=this.ShowData.arrivedCity;
    this.DepartAirPortName=this.ShowData.depatureAirPortName;
    this.ArrivedAirportName=this.ShowData.arriveAirPortName;
    this.DepartDate=this.ShowData.departDate;
    this.ArrivedDate=this.ShowData.arriveDate;
    this.DepartTime=this.ShowData.departTime;
    this.ArrivedTime=this.ShowData.arriveTime;
    this.AirPLaneId=this.ShowData.airPlaneId;
    this.CostId=this.ShowData.costId;
    this.TravelId=this.ShowData.airPlaneId;
    this.flag1=true;
    this.flag2=false;
  }
  else
  {
    this.flag2=true;
    this.flag1=false;
  }



     },
      (err)=>{console.log(err)}
    );
   
  }

  Back()
  {
    this.rout.navigate(['Booking/MenageBooking']);
  }

  Delete()
  {
    if(confirm("Are You Sure You Want To Delete Booking"))
    {
        this.service.DeleteByPnrNumber(this.PNRNumber).subscribe(
          (res)=>{console.log(res)},
          (err)=>{console.log(err)}
        );
        alert("Successfully Deleted Your Flight");
        this.rout.navigate(['Booking/MenageBooking']);
       
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


  Update()
  {
    this.ufirstname=this.UserFirstName;
    this.umiddlename=this.UserMiddleName;
    this.ulastname=this.UserLastame;
    this.uemail=this.UserEmaill;
    this.uphonenumber=this.UserPhoneNumber;
  }

  Save()
  {
    if(confirm("Are You Sure Update Your Details"))
    {
      let Data:FlightBooking={pNRNumber:this.PNRNumber,userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,userEmail:this.UserData.value.UserEmail,userPhoneNumber:this.UserData.value.UserPhoneNumber,airplaneId:this.AirPLaneId,costId:this.CostId,travelId:this.TravelId}
      this.service.UpdateUser(this.PNRNumber,Data).subscribe(
        (res)=>{console.log(res)},
        (err)=>{console.log(err)}
      );
      alert("Your Data is SuccessFully Updated");
      this.rout.navigate(['Booking/MenageBooking']);
    }
  }

}
