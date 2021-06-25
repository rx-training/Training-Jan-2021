import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelBookingCrud } from 'src/app/Models/HotelBookingCrud';
import { HotelCostCurd } from 'src/app/Models/HotelCostCrud';
import { HotelDetailsCrud } from 'src/app/Models/HotelDetailsCrud';
import { HotelBookingCrudService } from 'src/app/Services/HotelBookingCrud/hotel-booking-crud.service';
import { HotelCostCrudService } from 'src/app/Services/HotelCostCrud/hotel-cost-crud.service';
import { HotelDetailsCrudService } from 'src/app/Services/HotelDetailsCrud/hotel-details-crud.service';

@Component({
  selector: 'app-hotel-cost-crud',
  templateUrl: './hotel-cost-crud.component.html',
  styleUrls: ['./hotel-cost-crud.component.css']
})
export class HotelCostCrudComponent implements OnInit {

  constructor(private service:HotelCostCrudService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private booking:HotelBookingCrudService,private hotelDetails:HotelDetailsCrudService) { }

  CostCurd:Array<HotelCostCurd>
  Booking:Array<HotelBookingCrud>
  hoteldetails:Array<HotelDetailsCrud>


  
  uCostForm:FormGroup;
  uamount:AbstractControl;
  utax:AbstractControl;

  ngOnInit(): void {

    this.booking.GetAllHotelBooking().subscribe(
      (res:Array<HotelBookingCrud>)=>{
        this.Booking=res;
      },
      (err)=>{console.log(err)}
    )
    this.hotelDetails.GetAllHotel().subscribe(
      (res:Array<HotelDetailsCrud>)=>{
       this.hoteldetails=res;
      },
      (err)=>{
        console.log(err);
      }

    )


    this.uCostForm=this.fb.group(
      {
        Amount:['',Validators.required],
        Tax:['',Validators.required]
      }
    );
    this.uamount=this.uCostForm.get('Amount');
    this.utax=this.uCostForm.get('Tax');

this.GetAllCost();
   

    
  }

  GetAllCost()
  {
    this.service.getAllCost().subscribe(
      (res:Array<HotelCostCurd>)=>{this.CostCurd=res},
      (err)=>{console.log(err)}
    );
  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }
  Tax=0;
  Amount=0;
  CostId:number;
  Edit(item:HotelCostCurd)
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
    let letUpdateData:HotelCostCurd={amount:Amount,tax:Tax,totelPrice:TotelAmount};


    this.service.UpdateCost(this.CostId,letUpdateData).subscribe(
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
  Delete(costId:number)
  {
    let count1=0;
    let count2=0;

    for (const iterator of this.Booking)
    {
      if(iterator.costId==costId)
      {
        count1=1;
        break;
      }
    }

    for (const iterator of this.hoteldetails)
    {
        if(iterator.costId==costId)
        {
          count2=1;
          break;
        }  
    }

    if(count1==0 && count2==0)
    {
     if(confirm("Are You Sure You Want To Delete The Flight"))
     {
       this.service.DeleteCost(costId).subscribe(
         (res)=>{
           console.log(res)
           this.GetAllCost();
        },
        (err)=>{
              console.log(err);
              this.GetAllCost();
        }
       )
     }
    }
    if(count1==1 || count2==1)
    {
      alert("Plase Delete The Hotel And Booking Releted To This Cost")
    }

  }

}
