import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightDetails } from 'src/app/Models/FlightSearchModel';
import { FlightStatus } from 'src/app/Models/FLightStatus';
import { FlightBookingService } from 'src/app/Services/FlightBookingService/flight-booking.service';

@Component({
  selector: 'app-status-of-flight',
  templateUrl: './status-of-flight.component.html',
  styleUrls: ['./status-of-flight.component.css']
})
export class StatusOfFlightComponent implements OnInit {

  constructor(private service:FlightBookingService,private router:Router) { }

  getdata:Array<FlightStatus>

  Arrivefrom:string;
  DepartFrom:string;
  DepartDate:Date;
  FlightNo:string;
  StoreData:Array<FlightDetails>=[];
  data:FlightDetails;
  flag1:boolean;
  flag2:boolean;


  ArrivedCity:string;
  DepartureCity:string;
  DepartAirportName:string;
  ArrivedtAirportName:string;
  DepartDatee:Date;
  ArrivedDate:Date;
  DepartTime:string;
  ArrivedTime:string;
  SeatingCapacity:number;
  Make:Date;
  Model:string;
  AirplaneName:string;


  ngOnInit(): void {
    this. flag1=true;
  this. flag2=true;
  

    this.getdata=this.service.showdata1();
    for (const iterator of this.getdata)
    {
      this.Arrivefrom=iterator.ArrivedFrom;
      this.DepartDate=iterator.DepartDate;
      this.DepartFrom=iterator.DepartFrom;
      this.FlightNo=iterator.FlightNumber; 
    }
    console.log(this.Arrivefrom)
    let spliteddata=this.FlightNo.split(' ');
   
    this.service.GetFlight().subscribe(
      (res:Array<FlightDetails>)=>
      {
        this.StoreData=res;
        console.log(this.StoreData);
        for (const iterator of this.StoreData) 
        {
          let d1=new Date(this.DepartDate);
          let d2=new Date(iterator.departDate);
          if(iterator.arrivedCity==this.Arrivefrom && iterator.depatureCity==this.DepartFrom )
          {


            if(iterator.model== spliteddata[0] && iterator.airPlaneName==spliteddata[1] && d1.getDay()==d2.getDay() && d1.getFullYear()==d2.getFullYear() && d1.getMonth()==d2.getMonth())
            {
              console.log(iterator);
                this.DepartureCity=iterator.depatureCity;
                this.ArrivedCity=iterator.arrivedCity;
                this.DepartAirportName=iterator.depatureAirPortName;
                this.ArrivedtAirportName=iterator.arriveAirPortName;
                this.DepartDatee=iterator.departDate;
                this.ArrivedDate=iterator.arriveDate;
                this.DepartTime=iterator.departTime;
                this.ArrivedTime=iterator.arriveTime;
                this.SeatingCapacity=iterator.seatingCapacity;
                this.Make=iterator.make;
                this.Model=iterator.model;
                this.AirplaneName=iterator.airPlaneName;

         

            }

            
          }
          
        }

        if(this.ArrivedtAirportName !=null)
        {
          this.flag1=true;
          this.flag2=false;
        }
        if(this.ArrivedtAirportName ==null)
        {

          this.flag1=false;
          this.flag2=true;
        }

        

      }


    )

    

  
    
  }
  Back()
  {
      this.router.navigate(['Booking/flightstatus']);
  }

}
