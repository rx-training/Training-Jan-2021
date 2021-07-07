import { Component, OnInit,} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { AirPlaneDetails } from 'src/app/ModelsSpicejet/AirplaneDetails';
import { PassengerDetails } from 'src/app/ModelsSpicejet/PassengerDetails';
import { SearchFlight } from 'src/app/ModelsSpicejet/SearchFlight';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { AirplaneServiceService } from 'src/app/ServicesSpicejet/AirplaneSerice/airplane-service.service';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';
import { SearchFlightService } from 'src/app/ServicesSpicejet/SearchFlightService/search-flight.service';



@Component({
  selector: 'app-bookingof-flight',
  templateUrl: './bookingof-flight.component.html',
  styleUrls: ['./bookingof-flight.component.css'],
  
})
export class BookingofFlightComponent implements OnInit{
  
  constructor(private router:Router,private route:ActivatedRoute,private serviceb:SearchFlightService,private fb:FormBuilder,private BookingService:FlightBookingService,public UpdateAirplane:AirplaneServiceService) { }
  

  FlightId:number;

  Passangers:number;
  DepartCity:string;
  ArrivedCity:string;
  Money:string;
  showdata:Array<PassengerDetails>;
  isDisabled: boolean;

 UserData:FormGroup;
 count:number;
 FlightDetails:Array<SearchFlight>=[];
//  UserDetails:Array<UserDetails>=[];

 userfirstname:AbstractControl;
 usermiddlename:AbstractControl;
 userlastname:AbstractControl;
 useremail:AbstractControl;
 userPhoneNumber:AbstractControl;


  ngOnInit(): void {

    
  


    this.count=1;

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[OnlyCharactorAllowed]],
      UserLastName:['',[OnlyCharactorAllowed]],
      UserEmail:[{value:'',disabled: this.isDisabled},[,Validators.email]],
      UserPhoneNumber:['',[Validators.required,OnlyDigitAllowed,Validators.maxLength(10),Validators.minLength(10)]]
    });

    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');


     this.serviceb.GetAllFlight().subscribe(
       (res:Array<SearchFlight>)=>{this.FlightDetails=res
        },
       (err)=>{
         console.log(err);
      
        }
       

     ) 


    this.FlightId= parseInt(this.route.snapshot.paramMap.get('id'));
  
    this.showdata=this.serviceb.ShowData();

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
  DepartDate:string;
  ArriveDate:string;
  DepartTime:string;
  ArriveTime:string;
  Tax:number;
  Amount:number;
  Totel:number;
  TotelAmount:number;
  AirPlaneId:number;
  CostId:number;
  TravelId:number;
  mcompony:string;
  mdate:Date;
 scapacity:number;
 
  

   
  



    NumberofPassangerData:Array<any>=[];
    flag1:boolean=true;
    flag2:boolean=false;
    StoreUserData()
    {
      this.NumberofPassangerData.push(this.UserData.value)

      var particularflight:SearchFlight=this.FlightDetails.filter(s=>s.tripId==this.FlightId)[0];
      console.log(particularflight.departureAirportName);
     this.DepartAirportName=particularflight.departureAirportName;
      this.ArrivedAirportName=particularflight.arrivedAirportName;
      this.Model=particularflight.airplaneModel;
      this.AirPlaneName=particularflight.airplaneName;
       this.DepartDate=particularflight.departDateTime.split("T")[0];
      this.ArriveDate=particularflight.arrivedDateTime.split("T")[0];
      this.Tax=particularflight.tax;
      this.Amount=particularflight.amount;
      this.TotelAmount=particularflight.totelCost;
      this.DepartTime=particularflight.departDateTime.split("T")[1];
      this.ArriveTime=particularflight.arrivedDateTime.split("T")[1];
      this.AirPlaneId=particularflight.airplaneId;
      this.CostId=particularflight.costId;
      this.TravelId=particularflight.tripId;
      this.Model=particularflight.airplaneModel;
      this.mcompony=particularflight.manufactureCompony;
      this.mdate=particularflight.manufactureDate;
      this.scapacity=particularflight.seatingCapacity;







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
        
      }
       // console.log(this.UserData.value);  

        this.UserData.reset();
        //this.UserData.reset();  
        console.log(this.NumberofPassangerData);
        
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
      var UserDetails:UserDetails;
     console.log(this.NumberofPassangerData);
     let pnrnumber=this.PNRNumberGeneration();
     let dateString = new Date();
     let yourDate: Date = new Date(dateString + ' UTC');
     let data:AirPlaneDetails;
    console.log(this.scapacity)
      let cal=this.scapacity-this.NumberofPassangerData.length;  
     data= 
          {
            airplaneId:this.AirPlaneId,
            airplaneModel:this.Model,
            airplaneName:this.AirPlaneName,
            manufactureCompony:this.mcompony,
            manufactureDate:this.mdate,
            seatingCapacity:cal
          }

         this.UpdateAirplane.UpdateAirplane(data,this.AirPlaneId,).subscribe(
           (res)=>{console.log(res)},
           (err)=>{console.log(err)}
         );

      for (var iterator of this.NumberofPassangerData)
       {
        

         UserDetails={
           pnrNumber:pnrnumber,
           bookingDateTime:yourDate,
           userFirstName:iterator.UserFirstName,
           userMiddleName:iterator.UserMiddleName,
           userLastName:iterator.UserLastName,
           userContactNumber:iterator. UserPhoneNumber,
           userEmail:iterator.UserEmail,
           airplaneId:this.AirPlaneId,
           costId:this.CostId,
           tripId:this.TravelId
          };
          

         
          
          this.BookingService.InserBooking(UserDetails).subscribe(
            (res)=>{console.log(res)},
            (err)=>{console.log(err)}
          );
      }
      
        alert("successFully Booked Your Flight Your PNR Number Will be Send On Your Email");
       
    }
}


