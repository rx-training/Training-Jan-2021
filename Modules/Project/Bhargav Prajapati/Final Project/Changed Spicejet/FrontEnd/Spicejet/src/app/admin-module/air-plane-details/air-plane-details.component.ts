import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AirPlaneDetails } from 'src/app/ModelsSpicejet/AirplaneDetails';
import { RouteDetails } from 'src/app/ModelsSpicejet/RouteDetails';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { AirplaneServiceService } from 'src/app/ServicesSpicejet/AirplaneSerice/airplane-service.service';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';
import { RouteDetailsService } from 'src/app/ServicesSpicejet/RouteService/route-details.service';

@Component({
  selector: 'app-air-plane-details',
  templateUrl: './air-plane-details.component.html',
  styleUrls: ['./air-plane-details.component.css']
})
export class AirPlaneDetailsComponent implements OnInit {

  constructor(private router:Router,private service:AirplaneServiceService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private AirplaneRoute:RouteDetailsService,private Booking:FlightBookingService)
  {}
  Airplane:Array<AirPlaneDetails>;
  BookingFlight:Array<UserDetails>;
  TripFlight:Array<RouteDetails>;
  AirplaneData:FormGroup;
  uAirplaneData:FormGroup;

  airplanename:AbstractControl;
  seatingcapasity:AbstractControl;
  model:AbstractControl;
  make:AbstractControl;
  compony:AbstractControl;

  uairplanename:AbstractControl;
  useatingcapasity:AbstractControl;
  umodel:AbstractControl;
  ucompony:AbstractControl;
  umake:AbstractControl;
  ngOnInit(): void {

    this.GetAllPlane();

    this.Booking.GetAllBooking().subscribe(
      (res:Array<UserDetails>)=>{this.BookingFlight=res},
      (err)=>{console.log(err)}
    );

    this.AirplaneRoute.GetAllRoute().subscribe(
      (res:Array<RouteDetails>)=>{
        this.TripFlight=res
      },
      (err)=>{console.log(err)}
    )
    this.AirplaneData=this.fb.group({

      AirplanName:['',Validators.required],
      SeatingCapacity:['',Validators.required],
      Model:['',Validators.required],
      Make:['',Validators.required],
      Compony:['',Validators.required]

    });
    this.airplanename=this.AirplaneData.get('AirplanName');
    this.seatingcapasity=this.AirplaneData.get('SeatingCapacity');
    this.model=this.AirplaneData.get('Model');
    this.make=this.AirplaneData.get('Make');
    this.compony=this.AirplaneData.get('Compony');


    this.uAirplaneData=this.fb.group({

      AirplanName:['',Validators.required],
      SeatingCapacity:['',Validators.required],
      Model:['',Validators.required],
      Make:['',Validators.required], 
      Compony:['',Validators.required]

    });
    this.uairplanename=this.uAirplaneData.get('AirplanName');
    this.useatingcapasity=this.uAirplaneData.get('SeatingCapacity');
    this.umodel=this.uAirplaneData.get('Model');
    this.ucompony=this.uAirplaneData.get('Compony');
    this.umake=this.uAirplaneData.get('Make');


    


  }

  GetAllPlane()
  {
    this.service.GetAllPlane().subscribe(
      (res:Array<AirPlaneDetails>)=>{this.Airplane=res},
      (err)=>{
        console.log(err)
        if(err.status)
        {
         
          sessionStorage.removeItem('token');
          this.router.navigateByUrl('404');
         
        }
      }
    )
  }

  AddAirplane()
  {
      let InsertAirplane:AirPlaneDetails={airplaneName:this.AirplaneData.value.AirplanName,manufactureDate:this.AirplaneData.value.Make,airplaneModel:this.AirplaneData.value.Model,seatingCapacity:this.AirplaneData.value.SeatingCapacity,manufactureCompony:this.AirplaneData.value.Compony}
      this.service.InsertAirplane(InsertAirplane).subscribe(
        (res)=>{
          console.log(res);
          this.GetAllPlane();
        
        },
        (err)=>{
          console.log(err);
          this.GetAllPlane();
        }
      );      
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }

  AirplaneName="";
  SeatingCapacit=0;
  Model="";
  AirplaneId:number;
  MakingDate:Date;
  cmp="";
  
  Eidt(item:AirPlaneDetails)
  {
      this.AirplaneName=item.airplaneName;
      this.SeatingCapacit=item.seatingCapacity;
      this.Model=item.airplaneModel;
      this.AirplaneId=item.airplaneId;
      this.MakingDate=item.manufactureDate;
      this.cmp=item.manufactureCompony;

  }

  UpdatedData()
  {
      let UpdateData:AirPlaneDetails=
      {
        airplaneName:this.uAirplaneData.value.AirplanName,
        airplaneModel:this.uAirplaneData.value.Model,
        seatingCapacity:this.uAirplaneData.value.SeatingCapacity,
        manufactureDate:this.uAirplaneData.value.Make,
        manufactureCompony:this.uAirplaneData.value.Compony
        
      }
      this.service.UpdateAirplane(UpdateData,this.AirplaneId).subscribe(
        (res)=>{
          console.log(res);
          this.GetAllPlane();
        },
        (err)=>{
          console.log(err);
          this.GetAllPlane();
        }
      );
      
  }

  DeleteFlight(AirplaneId:number)
  {
    let count1:number=0;
    let Count2:number=0;
      for (const iterator of this.TripFlight)
      {
          if(iterator.airplaneId==AirplaneId)
          {
           count1=1;
        
            break;
          }  
      }
      for (const iterator of this.BookingFlight) 
      {
          if(iterator.airplaneId==AirplaneId)
          {
            Count2=1;
              break;
          }  
      }

      if(count1==0 && Count2==0)
      {
        if(confirm("Are You Sure You Want To Delete This Flight"))
        {
            this.service.DeleteAirplane(AirplaneId).subscribe(
              (res)=>{
                console.log(res);
                this.GetAllPlane();
              },
              (err)=>{
                console.log(err);
                this.GetAllPlane();

              }
            )
      
      }
    }
      if(count1==1 ||Count2==1)
      {
        alert("Please First Delete the Trip And Booking  Related To This Airplane");
        
      }


 }

}
  
