import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { RouteDetails } from 'src/app/ModelsSpicejet/RouteDetails';
import { TripDetails } from 'src/app/ModelsSpicejet/TripDetails';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';
import { RouteDetailsService } from 'src/app/ServicesSpicejet/RouteService/route-details.service';
import { TripDetailsService } from 'src/app/ServicesSpicejet/TripDetails/trip-details.service';

@Component({
  selector: 'app-airplane-trip-details',
  templateUrl: './airplane-trip-details.component.html',
  styleUrls: ['./airplane-trip-details.component.css']
})
export class AirplaneTripDetailsComponent implements OnInit {


  constructor(private router:Router,private fb: FormBuilder, private cdr: ChangeDetectorRef, private service: TripDetailsService, private Booking:FlightBookingService , private RouteFLight: RouteDetailsService) { }
  AirplanTrip: Array<TripDetails>
  BookingPlane: Array<UserDetails>
  RouteDetails: Array<RouteDetails>
  
  EditForm: FormGroup;
  InsertForm: FormGroup;

  departcity: AbstractControl;
  arrivedcity: AbstractControl;
  departairportname: AbstractControl;
  arrivedairportname: AbstractControl;
 departdate:AbstractControl;
 arriveddate:AbstractControl;
  departtime: AbstractControl;
  arrivedtime: AbstractControl;
  planeid: AbstractControl;
  costid: AbstractControl;


  Idepartcity: AbstractControl;
  Iarrivedcity: AbstractControl;
  Idepartairportname: AbstractControl;
  Iarrivedairportname: AbstractControl;
  Ideparttime: AbstractControl;
  Iarrivedtime: AbstractControl;
  Iplaneid: AbstractControl;
  Icostid: AbstractControl;
  IDepartDate: AbstractControl
  IArrivedDate: AbstractControl;

  ngOnInit(): void {
    this.EditForm = this.fb.group({
      DepatureCity: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivalCity: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivedAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartDate: ['', Validators.required],
      ArrivedDate: ['', Validators.required]

    });

    this.InsertForm = this.fb.group({

      DepatureCity: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivalCity: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivedAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartDate: ['', Validators.required],
      ArrivedDate: ['', Validators.required]


    });


    this.departcity = this.EditForm.get('DepatureCity');
    this.arrivedcity = this.EditForm.get('ArrivalCity');
    this.departairportname = this.EditForm.get('DepartAirportName');
    this.arrivedairportname = this.EditForm.get('ArrivedAirportName');
    this.departdate=this.EditForm.get('DepartDate');
    this.arriveddate=this.EditForm.get('ArrivedDate');


    this.Idepartcity = this.InsertForm.get('DepatureCity');
    this.Iarrivedcity = this.InsertForm.get('ArrivalCity');
    this.Idepartairportname = this.InsertForm.get('DepartAirportName');
    this.Iarrivedairportname = this.InsertForm.get('ArrivedAirportName');
    this.Ideparttime = this.InsertForm.get('DepartTime');
    this.Iarrivedtime = this.InsertForm.get('ArrivedTime');
    this.Iplaneid = this.InsertForm.get('PlaneId');
    this.Icostid = this.InsertForm.get('CostId');
    this.IDepartDate = this.EditForm.get('DepartDate');
    this.IArrivedDate = this.EditForm.get('ArrivedDate');





    this.GetAllFlightTrip();



    this.Booking.GetAllBooking().subscribe(
      (res: Array<UserDetails>) => { this.BookingPlane = res },
      (err) => { 
        console.log(err) ;
      
      }
    )

    this.RouteFLight.GetAllRoute().subscribe(
    (res:Array<RouteDetails>)=>{
      this.RouteDetails=res;
    }
    )


    




  }
  GetAllFlightTrip() {
    this.service.GetAllTrip().subscribe(
      (res: Array<TripDetails>) => { this.AirplanTrip = res },
      (err) => { 
        console.log(err);
        if(err.status)
        {
         
          sessionStorage.removeItem('token');
          this.router.navigateByUrl('404');
         
        }
       })
  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }
  DeletedTrip(id: number) {
    let count1 = 0;
    let count2 = 0;


    for (const iterator of this.BookingPlane) {
      if (iterator.tripId == id) {

        count1 = 1;
        break;
      }
    }

    for (const iterator of this.RouteDetails) {
      if (iterator.tripId == id) {

        count2 = 1;
        break;
      }
    }


    if (count1 == 1 || count2==1) {
      alert("Please First Delete the Booking Of This Filght And Route");
    }
    else {
      if (confirm("Are You Sure You Want To Delete Flight Trip")) {

        this.service.DeleteTrip(id).subscribe(
          (res)=>{
            console.log(res);
            this.GetAllFlightTrip();
          },
          (err)=>{
            console.log(err);
            this.GetAllFlightTrip();
            alert("Trip successfully Deleted");
          }
        )
      }
      }
    }


  DepatureCity = "";
  ArrivalCity = "";
  DepatureAirportName = "";
  ArrivalAirportName = "";
  DepartDate: Date;
  ArrivedDate: Date;
  TripId: number;
  Save(item: TripDetails) {
    this.DepatureCity = item.depatureCity;
    this.ArrivalCity = item.arrivedCity;
    this.DepatureAirportName = item.departureAirportName;
    this.ArrivalAirportName = item.arrivedAirportName;
    this.DepartDate = item.departDateTime;
    this.ArrivedDate = item.arrivedDateTime;
    this.TripId = item.tripId





  }

  Update() {
    let data: TripDetails = 
    { 
      depatureCity: this.EditForm.value.DepatureCity, 
      arrivedCity: this.EditForm.value.ArrivalCity, 
      departDateTime: this.EditForm.value.DepartDate, 
      arrivedDateTime: this.EditForm.value.ArrivedDate, 
      arrivedAirportName: this.EditForm.value.ArrivedAirportName, 
      departureAirportName: this.EditForm.value.DepartAirportName,  
      tripId: this.TripId
     }
      this.service.UpdateTrip(data,this.TripId).subscribe(
        (res)=>{
          console.log(res);
          this.GetAllFlightTrip();

        },
        (err)=>{
          console.log(err);
          this.GetAllFlightTrip();
                  }
      );

  }

  AddTrip() {
   let Insertdata: TripDetails =
    { 
      depatureCity: this.InsertForm.value.DepatureCity, 
      arrivedCity: this.InsertForm.value.ArrivalCity, 
      departureAirportName: this.InsertForm.value.DepartAirportName, 
      arrivedAirportName: this.InsertForm.value.ArrivedAirportName, 
      departDateTime: this.InsertForm.value.DepartDate,
       arrivedDateTime: this.InsertForm.value.ArrivedDate, 

    }

    this.service.InsertTrip(Insertdata).subscribe(
      (res)=>{
        console.log(res);
        this.GetAllFlightTrip();
      },
      (err)=>{
          console.log(err);
          this.GetAllFlightTrip();  
      }
    )
    

  }

}
