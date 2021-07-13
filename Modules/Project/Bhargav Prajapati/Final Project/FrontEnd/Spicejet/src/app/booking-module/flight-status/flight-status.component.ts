import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DateCalculator, OnlyCharactorAllowed } from 'src/app/customvalidators';
import { FlightStatus } from 'src/app/Models/FLightStatus';
import { FlightBookingService } from 'src/app/Services/FlightBookingService/flight-booking.service';

@Component({
  selector: 'app-flight-status',
  templateUrl: './flight-status.component.html',
  styleUrls: ['./flight-status.component.css']
})
export class FlightStatusComponent implements OnInit {

  constructor(private readonly fb:FormBuilder,private rout:Router,private service:FlightBookingService) { }

  Departfrom:AbstractControl;
  ArriveFrom:AbstractControl;
  DepartDate:AbstractControl;
  FlightNo:AbstractControl;
  FlightStatus:FormGroup;
  Senddata:FlightStatus;
  ngOnInit(): void {
this.FlightStatus=this.fb.group(
  {
    DepartFrom:['',Validators.required],
    ArriveFrom:['',Validators.required],
    DepartDate:['',Validators.required],
    FlightNo:['',Validators.required]
  }
);

this.Departfrom=this.FlightStatus.get('DepartFrom');
this.ArriveFrom=this.FlightStatus.get('ArriveFrom');
this.FlightNo=this.FlightStatus.get('FlightNo');
this.DepartDate=this.FlightStatus.get("DepartDate");


  }
  
SearchFlight()
{
 
  this.Senddata={ArrivedFrom:this.FlightStatus.value.ArriveFrom,DepartFrom:this.FlightStatus.value.DepartFrom,DepartDate:this.FlightStatus.value.DepartDate,FlightNumber:this.FlightStatus.value.FlightNo}
  this.service.storingData1(this.Senddata);
  console.log(this.FlightStatus.value);
  this.rout.navigate(['Booking/Statusofflight']);

}

}