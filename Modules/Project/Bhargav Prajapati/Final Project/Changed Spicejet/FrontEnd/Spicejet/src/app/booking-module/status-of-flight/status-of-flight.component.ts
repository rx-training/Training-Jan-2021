import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { FlightDetails } from 'src/app/Models/FlightSearchModel';
import { FlightStatus } from 'src/app/ModelsSpicejet/FlightStatus';
import { SearchFlight } from 'src/app/ModelsSpicejet/SearchFlight';
import { SearchFlightService } from 'src/app/ServicesSpicejet/SearchFlightService/search-flight.service';

@Component({
  selector: 'app-status-of-flight',
  templateUrl: './status-of-flight.component.html',
  styleUrls: ['./status-of-flight.component.css']
})
export class StatusOfFlightComponent implements OnInit {

  constructor(private service:SearchFlightService,private router:Router) { }

  getdata:Array<FlightStatus>

  Arrivefrom:string;
  DepartFrom:string;
  DepartDate:Date;
  FlightNo:string;
  StoreData:Array<SearchFlight>=[];
  //data:FlightDetails;
  flag1:boolean;
  flag2:boolean;


  ArrivedCity:string;
  DepartureCity:string;
  DepartAirportName:string;
  ArrivedtAirportName:string;
  DepartDatee:string;
  ArrivedDate:string;
  DepartTime:string;
  ArrivedTime:string;
  SeatingCapacity:number;
  Make:Date;
  Model:string;
  AirplaneName:string;
  ManuFacturingCompony:string;


  ngOnInit(): void {
    this. flag1=true;
  this. flag2=true;
  

    this.getdata=this.service.showData1();
    for (const iterator of this.getdata)
    {
      this.Arrivefrom=iterator.ArrivedFrom;
      this.DepartDate=iterator.DepartDate;
      this.DepartFrom=iterator.DepartFrom;
      this.FlightNo=iterator.FlightNumber; 
    }
    console.log(this.Arrivefrom)
    let spliteddata=this.FlightNo.split(' ');
   
    this.service.GetAllFlight().subscribe(
      (res:Array<SearchFlight>)=>
      {
        this.StoreData=res;
        console.log(this.StoreData);
        for (const iterator of this.StoreData) 
        {
          let d1=new Date(this.DepartDate);
          let d2=new Date(iterator.departDateTime);
          if(iterator.arrivedCity==this.Arrivefrom && iterator.depatureCity==this.DepartFrom )
          {


            if(iterator.airplaneName== this.FlightNo  && d1.getDay()==d2.getDay() && d1.getFullYear()==d2.getFullYear() && d1.getMonth()==d2.getMonth())
            {
              console.log(iterator);
                this.DepartureCity=iterator.depatureCity;
                this.ArrivedCity=iterator.arrivedCity;
                this.DepartAirportName=iterator.departureAirportName;
                this.ArrivedtAirportName=iterator.arrivedAirportName;
                this.DepartDatee=iterator.departDateTime.split("T")[0];
                this.ArrivedDate=iterator.arrivedDateTime.split("T")[0];
                this.DepartTime=iterator.departDateTime.split("T")[1];
                this.ArrivedTime=iterator.arrivedDateTime.split("T")[1];
                this.SeatingCapacity=iterator.seatingCapacity;
                this.Make=iterator.manufactureDate;
                this.Model=iterator.airplaneModel;
                this.AirplaneName=iterator.airplaneName;
                this.ManuFacturingCompony=iterator.manufactureCompony;
                

         

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

        

      },
      (err)=>{
          console.log(err);
          if(err.status)
          {
       
        sessionStorage.removeItem('token');
        this.router.navigateByUrl('404');
       
          }        
      }


    )

    

  
    
  }
  Back()
  {
      this.router.navigate(['Booking/flightstatus']);
  }

}
