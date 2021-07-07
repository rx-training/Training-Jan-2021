import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SearchFlightService } from 'src/app/ServicesSpicejet/SearchFlightService/search-flight.service';
import { SearchFlight } from 'src/app/ModelsSpicejet/SearchFlight';
import { PassengerDetails } from 'src/app/ModelsSpicejet/PassengerDetails';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css'],
  
})
export class FlightComponent implements OnInit {

  FlightBooking:FormGroup
  constructor(private fb:FormBuilder,private flightsearch:SearchFlightService) { }
  
  Passangers:0;
  DepartCity:'';
  ArrivedCity:'';
  Money:'';

  SearchFlightData:SearchFlight[]=[];
  DynamicDepartCity:Array<string>=[];
  DynamicArrivedCity:Array<string>=[];
  UniqueDepartCity:Array<string>=[];
  UniqueArrivedCity:Array<string>=[];
  Departfrom:AbstractControl;
  Arrivefrom:AbstractControl;
  DepartDate:AbstractControl;
  Passanger:AbstractControl;
  Currency:AbstractControl;
  ngOnInit(): void {

     

      this.flightsearch.GetAllFlight().subscribe(
        (res:Array<SearchFlight>)=>{
          this.SearchFlightData=res;
          console.log(this.SearchFlightData);
          this.DynamicDepartCity=[];
          this.DynamicArrivedCity=[];
          for (const iterator of  this.SearchFlightData)
          {
            this.DynamicArrivedCity.push(iterator.arrivedCity);
            this.DynamicDepartCity.push(iterator.depatureCity);
          }
         this.UniqueDepartCity=this.DynamicDepartCity.filter(this.onlyUnique);
         this.UniqueArrivedCity=this.DynamicArrivedCity.filter(this.onlyUnique);
         
        },
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

 
  SortedFlight:SearchFlight[]=[];
  showflight:boolean=false;
  NoFlightAvaliable:boolean=false;
  SearchFlight()
  {
     
     this.SortedFlight=[];
     let sendingdata:PassengerDetails={Passangers:this.Passangers,ArrivedCity:this.ArrivedCity,DepartCity:this.DepartCity,Money:this.Money};
     
     this.flightsearch.StoringData(sendingdata);
     
        for (const iterator of this.SearchFlightData)
        {
           
         let d1=new Date(iterator.departDateTime)
         let d2=new Date(this.FlightBooking.value.DepartDate);
          if(iterator.depatureCity==this.FlightBooking.value.Departfrom && iterator.arrivedCity==this.FlightBooking.value.Arrivefrom &&  d1>=d2)
          {
            if(iterator.seatingCapacity>=this.Passangers)
            {
              this.SortedFlight.push(iterator)
            }
          }
          
        }
        this.NoFlightAvaliable=false;
        if(this.SortedFlight.length==0)
        {
          this.showflight=false;
          this.NoFlightAvaliable=true;
          
  
        }
        else
        {

        this.showflight=true;
        this.NoFlightAvaliable=false;
        }

      
        
     

  }
    onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  

}
