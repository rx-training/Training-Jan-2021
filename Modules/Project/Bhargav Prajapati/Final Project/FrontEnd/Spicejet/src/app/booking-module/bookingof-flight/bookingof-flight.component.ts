import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { FlightBooking } from 'src/app/Models/BookingFlight';
import { FlightBookingService } from 'src/app/Services/FlightBookingService/flight-booking.service';
import { UserBookedFlightCrudService } from 'src/app/Services/UserFlightBooked/user-booked-flight-crud.service';
import { FlightDetails } from '../../Models/FlightSearchModel';
import { PassengerDetails } from '../../Models/PassengerDetails';

@Component({
  selector: 'app-bookingof-flight',
  templateUrl: './bookingof-flight.component.html',
  styleUrls: ['./bookingof-flight.component.css'],
  
})
export class BookingofFlightComponent implements OnInit,OnChanges {
  
  constructor(private route:ActivatedRoute,private sevice:FlightBookingService,private fb:FormBuilder,private UserService:UserBookedFlightCrudService) { }
  

  FlightId:number;

  Passangers:number;
  DepartCity:string;
  ArrivedCity:string;
  Money:string;
  showdata:Array<PassengerDetails>;

 UserData:FormGroup;
 count:number;
 FlightDetails:Array<FlightDetails>=[];
 UserDetails:Array<FlightBooking>=[];

 userfirstname:AbstractControl;
 usermiddlename:AbstractControl;
 userlastname:AbstractControl;
 useremail:AbstractControl;
 userPhoneNumber:AbstractControl;


  ngOnInit(): void {

    this.UserService.GetUsers().subscribe(
      (res:Array<FlightBooking>)=>{this.UserDetails=res
      console.log(this.UserDetails)},
      (err)=>{console.log(err)}
    )
  


    this.count=1;

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
      UserEmail:['',[Validators.required,Validators.email]],
      UserPhoneNumber:['',[Validators.required,OnlyDigitAllowed,Validators.maxLength(10),Validators.minLength(10)]]
    });

    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');


     this.sevice.GetFlight().subscribe(
       (res:Array<FlightDetails>)=>{this.FlightDetails=res
        },
       (err)=>{console.log(err)}

     ) 


    this.FlightId= parseInt(this.route.snapshot.paramMap.get('id'));
  
    this.showdata=this.sevice.showdata();

    for (const iterator of this.showdata) 
    {
      this.Passangers=iterator.Passangers;
      this.DepartCity=iterator.DepartCity;
      this.ArrivedCity=iterator.ArrivedCity;
      this.Money=iterator.Money;  
    }

    



       
  }

  DepartAirportName:string;
  ArrivedAirportName:string;
  Model:string;
  AirPlaneName:string;
  DepartDate:Date;
  ArriveDate:Date;
  DepartTime:string;
  ArriveTime:string;
  Tax:number;
  Amount:number;
  Totel:number;
  TotelAmount:number;
  AirPlaneId:number;
  CostId:number;
  TravelId:number;
  

   
  ngOnChanges(changes: SimpleChanges): void {
 
    
  }



    NumberofPassangerData:Array<any>=[];
    flag1:boolean=true;
    flag2:boolean=false;
    StoreUserData()
    {
       this.NumberofPassangerData.push(this.UserData.value)
      var particularflight:FlightDetails=this.FlightDetails.filter(s=>s.travelId==this.FlightId)[0];
      console.log(particularflight.depatureAirPortName);
      this.DepartAirportName=particularflight.depatureAirPortName;
      this.ArrivedAirportName=particularflight.arriveAirPortName;
      this.Model=particularflight.model;
      this.AirPlaneName=particularflight.airPlaneName;
      this.DepartDate=particularflight.departDate;
      this.ArriveDate=particularflight.arriveDate;
      this.Tax=particularflight.tex;
      this.Amount=particularflight.amout;
      this.TotelAmount=particularflight.totelAmount;
      this.Totel=particularflight.amout;
      this.DepartTime=particularflight.departTime;
      this.ArriveTime=particularflight.arriveTime;
      this.AirPlaneId=particularflight.airPlaneId;
      this.CostId=particularflight.costId;
      this.TravelId=particularflight.travelId;



      this.count=this.count+1;
      if(this.count<=this.Passangers)
      {
        this.flag1=true;
        this.flag2=false;
      }
      if(this.count>this.Passangers)
      {
        this.flag1=false;
        this.flag2=true;
        console.log(this.NumberofPassangerData);
      }
       // console.log(this.UserData.value);  

        this.UserData.reset();
        //this.UserData.reset();  
    }

    letters:string = "ABCDEFGHJKMNPQRSTUXY1234567890abcdefghjkmnpqrstuxy";
    PNRNumberGeneration()
         {
         var text = "";
         for (var i = 0; i < 8; i++) {
           text += this.letters.charAt(Math.floor(Math.random() * this.letters.length));
         }
         return text;
       };
    MakePayment()
    {
      var UserDetails:FlightBooking;
     // console.log(this.NumberofPassangerData);
      for (var iterator of this.NumberofPassangerData)
       {
          UserDetails={
            pNRNumber:this.PNRNumberGeneration(),
            userFirstName:iterator.UserFirstName,
            userMiddleName: iterator.UserMiddleName,
            userLastName:iterator.UserLastName,
            userEmail:iterator.UserEmail,
            userPhoneNumber:iterator.UserPhoneNumber,
            airplaneId:this.AirPlaneId,
            costId:this.CostId,
            travelId:this.TravelId    
      
          }
          
          this.UserService.StoreUsers(UserDetails).subscribe(
            (res)=>{console.log(res)},
            (err)=>{console.log(err)}
            )
      }
      
        alert("successFully Booked Your Flight Your PNR Number Will be Send On Your Email");
       
    }
}



/*
Day Summary :-
      Worked on  some Changes on the 
      Project
*/ 