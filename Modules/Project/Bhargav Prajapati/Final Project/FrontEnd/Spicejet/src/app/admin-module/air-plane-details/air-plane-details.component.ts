import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirplaneBookingCrud } from 'src/app/Models/AirplaneBookingCrud';
import { AirPLaneCrud } from 'src/app/Models/AirplaneCrud';
import { AirplaneTripCrud } from 'src/app/Models/AirplaneTripCrud';
import { AirplaneBookingCrudService } from 'src/app/Services/AirplaneBookingCrud/airplane-booking-crud.service';
import { AirplaneCrudService } from 'src/app/Services/AirplaneCrud/airplane-crud.service';
import { AirplaneTripCrudService } from 'src/app/Services/AirplaneTripCrud/airplane-trip-crud.service';

@Component({
  selector: 'app-air-plane-details',
  templateUrl: './air-plane-details.component.html',
  styleUrls: ['./air-plane-details.component.css']
})
export class AirPlaneDetailsComponent implements OnInit {

  constructor(private service:AirplaneCrudService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private AirplaneTrip:AirplaneTripCrudService,private Booking:AirplaneBookingCrudService)
  {}
  Airplane:Array<AirPLaneCrud>;
  BookingFlight:Array<AirplaneBookingCrud>;
  TripFlight:Array<AirplaneTripCrud>;
  AirplaneData:FormGroup;
  uAirplaneData:FormGroup;

  airplanename:AbstractControl;
  seatingcapasity:AbstractControl;
  model:AbstractControl;
  make:AbstractControl;

  uairplanename:AbstractControl;
  useatingcapasity:AbstractControl;
  umodel:AbstractControl;
  ngOnInit(): void {

    this.GetAllPlane();

    this.Booking.GetAllBooking().subscribe(
      (res:Array<AirplaneBookingCrud>)=>{this.BookingFlight=res},
      (err)=>{console.log(err)}
    );

    this.AirplaneTrip.GetAllFlightTrip().subscribe(
      (res:Array<AirplaneTripCrud>)=>{
        this.TripFlight=res
      },
      (err)=>{console.log(err)}
    )
    this.AirplaneData=this.fb.group({

      AirplanName:['',Validators.required],
      SeatingCapacity:['',Validators.required],
      Model:['',Validators.required],
      Make:['',Validators.required]

    });
    this.airplanename=this.AirplaneData.get('AirplanName');
    this.seatingcapasity=this.AirplaneData.get('SeatingCapacity');
    this.model=this.AirplaneData.get('Model');
    this.make=this.AirplaneData.get('Make');

    this.uAirplaneData=this.fb.group({

      AirplanName:['',Validators.required],
      SeatingCapacity:['',Validators.required],
      Model:['',Validators.required],

    });
    this.uairplanename=this.uAirplaneData.get('AirplanName');
    this.useatingcapasity=this.uAirplaneData.get('SeatingCapacity');
    this.umodel=this.uAirplaneData.get('Model');


    


  }

  GetAllPlane()
  {
    this.service.getAllAirplane().subscribe(
      (res:Array<AirPLaneCrud>)=>{this.Airplane=res},
      (err)=>{console.log(err)}
    )
  }

  AddAirplane()
  {
      let InsertAirplane:AirPLaneCrud={airPlaneName:this.AirplaneData.value.AirplanName,make:this.AirplaneData.value.Make,model:this.AirplaneData.value.Model,seatingCapacity:this.AirplaneData.value.SeatingCapacity}
      this.service.InsertPlane(InsertAirplane).subscribe(
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
  Eidt(item:AirPLaneCrud)
  {
      this.AirplaneName=item.airPlaneName;
      this.SeatingCapacit=item.seatingCapacity;
      this.Model=item.model;
      this.AirplaneId=item.airPlaneId;
      this.MakingDate=item.make;

  }

  UpdatedData()
  {
      let UpdateData:AirPLaneCrud=
      {
        airPlaneName:this.uAirplaneData.value.AirplanName,
        model:this.uAirplaneData.value.Model,
        seatingCapacity:this.uAirplaneData.value.SeatingCapacity,
        make:this.MakingDate
        
      }
      this.service.UpdatePane(this.AirplaneId,UpdateData).subscribe(
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
          if(iterator.airPlaneId==AirplaneId)
          {
           count1=1;
        
            break;
          }  
      }
      for (const iterator of this.BookingFlight) 
      {
          if(iterator.airPlaneId==AirplaneId)
          {
            Count2=1;
              break;
          }  
      }

      if(count1==0 && Count2==0)
      {
        if(confirm("Are You Sure You Want To Delete This Flight"))
        {
            this.service.DeletePlane(AirplaneId).subscribe(
            (res)=>{
              console.log(res);
              this.Airplane.splice(this.Airplane.indexOf(this.Airplane.filter(s =>s.airPlaneId==AirplaneId)[0]), 1);
            },
            (err)=>{
              console.log(err);
              this.Airplane.splice(this.Airplane.indexOf(this.Airplane.filter(s =>s.airPlaneId==AirplaneId)[0]), 1);

            }
            );
      
      }
    }
      if(count1==1 ||Count2==1)
      {
        alert("Please First Delete the Trip And Booking  Related To This Airplane");
        
      }


  }

}
