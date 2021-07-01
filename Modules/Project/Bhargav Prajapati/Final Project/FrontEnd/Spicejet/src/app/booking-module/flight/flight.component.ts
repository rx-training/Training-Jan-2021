import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { FlightBookingService } from 'src/app/Services/FlightBookingService/flight-booking.service';
import { FlightDetails } from '../../Models/FlightSearchModel';
import { PassengerDetails } from '../../Models/PassengerDetails';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  //providers:[FlightBookingService]
})
export class FlightComponent implements OnInit {

  FlightBooking:FormGroup
  constructor(private fb:FormBuilder,private Service:FlightBookingService) { }
  
  Passangers:0;
  DepartCity:'';
  ArrivedCity:'';
  Money:'';

  SearchFlightData:FlightDetails[]=[];
  Departfrom:AbstractControl;
  Arrivefrom:AbstractControl;
  DepartDate:AbstractControl;
  Passanger:AbstractControl;
  Currency:AbstractControl;
  ngOnInit(): void {

      this.Service.GetFlight().subscribe(
        (res:FlightDetails[])=>{this.SearchFlightData=res
        console.log(this.SearchFlightData)},
        (err)=>{console.log(err)}
      )
        
    this.FlightBooking=this.fb.group(
      {
        Departfrom:['',Validators.required],
        Arrivefrom:['',Validators.required],
        DepartDate:['',Validators.required],
        Passanger:['',Validators.required],
        Currency:['',Validators.required]
      }
    )

    this.Departfrom=this.FlightBooking.get('Departfrom');
    this.Arrivefrom=this.FlightBooking.get('Arrivefrom');
    this.DepartDate=this.FlightBooking.get('DepartDate');
    this.Passanger=this.FlightBooking.get('Passanger');
    this.Currency=this.FlightBooking.get('Currency');
  }

 
flag:boolean=true;
  DisableDate()
  {
    this.flag=true;
  }
  EnableDate()
  {
    this.flag=false;
  }

  flag1:boolean=true;

 
  SortedFlight:FlightDetails[]=[];
  showflight:boolean=false;
  NoFlightAvaliable:boolean=false;
  SearchFlight()
  {
     // console.log(this.SearchFlightData);

     this.SortedFlight=[];
     let sendingdata:PassengerDetails={Passangers:this.Passangers,ArrivedCity:this.ArrivedCity,DepartCity:this.DepartCity,Money:this.Money};
     
     this.Service.StoringData(sendingdata);
    // this.Service.showdata();
     
        for (const iterator of this.SearchFlightData)
        {
           
         let d1=new Date(iterator.departDate)
         let d2=new Date(this.FlightBooking.value.DepartDate);
          if(iterator.depatureCity==this.FlightBooking.value.Departfrom && iterator.arrivedCity==this.FlightBooking.value.Arrivefrom &&  d1>d2)
          {
            this.SortedFlight.push(iterator)
          }
          
        }
        this.NoFlightAvaliable=false;
        if(this.SortedFlight.length==0)
        {
          this.showflight=false;
         // alert("Sorry Flight is Not Avalilable") ;
          this.NoFlightAvaliable=true;
          
  
        }
        else
        {

        this.showflight=true;
        this.NoFlightAvaliable=false;
        }

      console.log(this.SortedFlight);
        
     

  }

}
