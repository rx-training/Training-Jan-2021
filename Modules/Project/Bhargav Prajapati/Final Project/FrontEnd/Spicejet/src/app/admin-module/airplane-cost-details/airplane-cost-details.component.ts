import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AirplaneBookingCrud } from 'src/app/Models/AirplaneBookingCrud';
import { AirplaneCostCrud } from 'src/app/Models/AirplaneCostCrud';
import { AirplaneTripCrud } from 'src/app/Models/AirplaneTripCrud';
import { AirplaneBookingCrudService } from 'src/app/Services/AirplaneBookingCrud/airplane-booking-crud.service';
import { AirplaneCostCrudService } from 'src/app/Services/AirplaneCostCrud/airplane-cost-crud.service';
import { AirplaneTripCrudService } from 'src/app/Services/AirplaneTripCrud/airplane-trip-crud.service';

@Component({
  selector: 'app-airplane-cost-details',
  templateUrl: './airplane-cost-details.component.html',
  styleUrls: ['./airplane-cost-details.component.css']
})
export class AirplaneCostDetailsComponent implements OnInit {

  AirplaneCost:Array<AirplaneCostCrud>
  constructor(private service:AirplaneCostCrudService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private Boooking:AirplaneBookingCrudService,private trip:AirplaneTripCrudService) { }

 BookingCostId:Array<AirplaneBookingCrud>;
  TripCostId:Array<AirplaneTripCrud>
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
        (res:Array<AirplaneBookingCrud>)=>{this.BookingCostId=res},
        (err)=>{console.log(err)}
      );
      this.trip.GetAllFlightTrip().subscribe(
        (res:Array<AirplaneTripCrud>)=>{this.TripCostId=res},
        (err)=>{console.log(err)}
      )

    


  }
  GetAllCost()
  {
    this.service.getAllAirplaneCost().subscribe(
      (res:Array<AirplaneCostCrud>)=>{this.AirplaneCost=res},
      (err)=>{console.log(err)}
    )
  }

  Insert()
  {
    let Amount:number=this.CostForm.value.Amount;
    let Tax:number=this.CostForm.value.Tax;
    let totel=Amount+ (Amount*Tax);
    let InsertCost:AirplaneCostCrud={amout:this.CostForm.value.Amount,tex:this.CostForm.value.Tax,totelAmount:totel}
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
  Edit(item:AirplaneCostCrud)
  {
      this.Tax=item.tex;
      this.Amount=item.amout;
      this.CostId=item.costId;

  }
  Update()
  {
    let Amount:number=this.uCostForm.value.Amount;
    let Tax:number=this.uCostForm.value.Tax;
    let TotelAmount:number=Amount + (Amount*Tax);
    let letUpdateData:AirplaneCostCrud={amout:Amount,tex:Tax,totelAmount:TotelAmount};

    this.service.UpdateCost(this.CostId,letUpdateData).subscribe(
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
              this.AirplaneCost.splice(this.AirplaneCost.indexOf(this.AirplaneCost.filter(s =>s.costId==costid)[0]), 1);
            },
            (err)=>{
              console.log(err);
              this.AirplaneCost.splice(this.AirplaneCost.indexOf(this.AirplaneCost.filter(s =>s.costId==costid)[0]), 1);
            }
            );
      }
      if(count1==1 ||Count2==1)
      {
        alert("Please First Delete the Trip And Booking  Related To This Cost");
        
      }

      


  }

}
