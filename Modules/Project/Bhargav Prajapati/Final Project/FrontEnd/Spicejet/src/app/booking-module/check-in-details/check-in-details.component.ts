import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/Models/CheckInDetails';
import { UserBookedFlightCrudService } from 'src/app/Services/UserFlightBooked/user-booked-flight-crud.service';

@Component({
  selector: 'app-check-in-details',
  templateUrl: './check-in-details.component.html',
  styleUrls: ['./check-in-details.component.css']
})
export class CheckInDetailsComponent implements OnInit{

  constructor(private service:UserBookedFlightCrudService,private rout:Router ) { }
 

  UserCheckInData:Array<Data>;
  UserPNRNumber:string;
  UserEmail:string;
  ShowData:any;

  AirPlaneName:string;
  Model:string;
  PNRNumber:string;
  UserFirstName:string;
  UserMiddleName:string;
  UserLastame:string;
  UserEmaill:string;
  UserPhoneNumber:number;
  Amount:number;
  Tax:number;
  totelAmount:number;
  ArrivedCity:string;
  DepatureCity:string;
  ArrivedAirportName:string;
  DepartAirPortName:string;
  DepartDate:Date;
  ArrivedDate:Date;
  DepartTime:string;
  ArrivedTime:string


 
  flag1:boolean=false;
  flag2:boolean=true;
  ngOnInit(): void 
  {
    this.UserCheckInData=this.service.showdata();
    console.log(this.UserCheckInData);
    for (const iterator of this.UserCheckInData)
    {
        this.UserPNRNumber=iterator.PNRNumber;
        this.UserEmail=iterator.EmailAddress;      
    }


    this.service.GetDataById(this.UserPNRNumber,this.UserEmail).subscribe(
      (res)=>{this.ShowData=res
      console.log(this.ShowData)
    if(this.ShowData !=null)
    {
    this.UserFirstName=this.ShowData.userFirstName; 
    this.UserMiddleName=this.ShowData.userMiddleName ;
    this.UserLastame=this.ShowData.userLastName ;
    this.PNRNumber=this.ShowData.pnrnumber;
    this.UserEmaill=this.ShowData.userEmail;
    this.UserPhoneNumber=this.ShowData.userPhoneNumber;
    this.AirPlaneName=this.ShowData.airPlaneName;
    this.Model=this.ShowData.model;
    this.Amount=this.ShowData.amout;
    this.Tax=this.ShowData.tex;
    this.totelAmount=this.ShowData.totelAmount;
    this.DepatureCity=this.ShowData.depatureCity;
    this.ArrivedCity=this.ShowData.arrivedCity;
   // this.DepatureCity=this.ShowData.depatureCity;
    this.DepartAirPortName=this.ShowData.depatureAirPortName;
    this.ArrivedAirportName=this.ShowData.arriveAirPortName;
    this.DepartDate=this.ShowData.departDate;
    this.ArrivedDate=this.ShowData.arriveDate;
    this.DepartTime=this.ShowData.departTime;
    this.ArrivedTime=this.ShowData.arriveTime;
    this.flag1=true;
    this.flag2=false;
  }
  else
  {
    this.flag2=true;
    this.flag1=false;
  }



     },
      (err)=>{console.log(err)}
    );

    

  }
  
  Back()
  {
    this.rout.navigate(['Booking/check-in']);
  }
  
    
  }


