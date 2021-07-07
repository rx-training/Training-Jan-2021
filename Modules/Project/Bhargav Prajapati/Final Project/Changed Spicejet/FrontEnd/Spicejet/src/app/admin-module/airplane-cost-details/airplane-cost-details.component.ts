import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CostDetails } from 'src/app/ModelsSpicejet/CostDetails';
import { RouteDetails } from 'src/app/ModelsSpicejet/RouteDetails';
import { UserDetails } from 'src/app/ModelsSpicejet/UserDetails';
import { CostServiceService } from 'src/app/ServicesSpicejet/AirplneCostService/cost-service.service';
import { FlightBookingService } from 'src/app/ServicesSpicejet/FlightBooking/flight-booking.service';
import { RouteDetailsService } from 'src/app/ServicesSpicejet/RouteService/route-details.service';

@Component({
  selector: 'app-airplane-cost-details',
  templateUrl: './airplane-cost-details.component.html',
  styleUrls: ['./airplane-cost-details.component.css']
})
export class AirplaneCostDetailsComponent implements OnInit {

  AirplaneCost:Array<CostDetails>
  constructor(private router:Router, private service:CostServiceService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private Boooking:FlightBookingService,private routeDetails:RouteDetailsService) { }

 BookingCostId:Array<UserDetails>;
  TripCostId:Array<RouteDetails>
  CostForm:FormGroup;
  uCostForm:FormGroup;
  amount:AbstractControl;
  tax:AbstractControl;

  uamount:AbstractControl;
  utax:AbstractControl;
  ngOnInit(): void {

    this.CostForm=this.fb.group({
      Amount:['',Validators.required],
      Tax:['',Validators.required]
    });
    this.amount=this.CostForm.get('Amount');
    this.tax=this.CostForm.get('Tax');

    this.uCostForm=this.fb.group(
      {
        Amount:['',Validators.required],
        Tax:['',Validators.required]
      }
    );
    this.uamount=this.uCostForm.get('Amount');
    this.utax=this.uCostForm.get('Tax');

      this.GetAllCost();


      this.Boooking.GetAllBooking().subscribe(
        (res:Array<UserDetails>)=>{this.BookingCostId=res},
        (err)=>{console.log(err)}
      );
      this.routeDetails.GetAllRoute().subscribe(
        (res:Array<RouteDetails>)=>{this.TripCostId=res},
        (err)=>{console.log(err)}
      )

    


  }
  GetAllCost()
  {
    this.service.GetAllCost().subscribe(
      (res:Array<CostDetails>)=>{this.AirplaneCost=res},
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

  Insert()
  {
    let Amount:number=this.CostForm.value.Amount;
    let Tax:number=this.CostForm.value.Tax;
    let totel=Amount+ (Amount*Tax);
    let InsertCost:CostDetails={amount:this.CostForm.value.Amount,tax:this.CostForm.value.Tax,totelCost:totel}
    this.service.InsertCost(InsertCost).subscribe(
      (res)=>{
        console.log(res);
        this.GetAllCost();
      },
      (err)=>{
        console.log(err);
        this.GetAllCost();
      }
    )
  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }
  Tax=0;
  Amount=0;
  CostId:number;
  Edit(item:CostDetails)
  {
      this.Tax=item.tax;
      this.Amount=item.amount;
      this.CostId=item.costId;

  }
  Update()
  {
    let Amount:number=this.uCostForm.value.Amount;
    let Tax:number=this.uCostForm.value.Tax;
    let TotelAmount:number=Amount + (Amount*Tax);
    let UpdateData:CostDetails={amount:Amount,tax:Tax,totelCost:TotelAmount};

  this.service.UpdateCost(UpdateData,this.CostId).subscribe(
    (res)=>{
      console.log(res);
      this.GetAllCost();
    },
    (err)=>{
      console.log(err);
      this.GetAllCost();
    }
  )
  }


   
  Delete(costid:number)
  {
      

   let count1:number=0;
    let Count2:number=0;
      for (const iterator of this.BookingCostId)
      {
          if(iterator.costId==costid)
          {
           count1=1;
        
            break;
          }  
      }
      for (const iterator of this.TripCostId) 
      {
          if(iterator.costId==costid)
          {
            Count2=1;
              break;
          }  
      }

     if(count1==0 && Count2==0)
     {
              this.service.DeleteCost(costid).subscribe(
                (res)=>{
                  console.log(res);
                  this.GetAllCost();
                },
                (err)=>{
                  console.log(err);
                  this.GetAllCost();
                }
              );

      }
      if(count1==1 ||Count2==1)
      {
        alert("Please First Delete the Trip And Booking  Related To This Cost");
        
      }

      


  }

}
