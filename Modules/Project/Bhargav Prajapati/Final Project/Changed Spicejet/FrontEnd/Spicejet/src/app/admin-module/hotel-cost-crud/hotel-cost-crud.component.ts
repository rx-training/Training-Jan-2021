import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelCostDetails } from 'src/app/ModelsSpicejet/HotelCostDetails';
import { HotellistDetails } from 'src/app/ModelsSpicejet/HotelListDetails';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';
import { HotelCostDetailsService } from 'src/app/ServicesSpicejet/HotelCostDetails/hotel-cost-details.service';
import { HotelListDetailsService } from 'src/app/ServicesSpicejet/HotelListDetails/hotel-list-details.service';

@Component({
  selector: 'app-hotel-cost-crud',
  templateUrl: './hotel-cost-crud.component.html',
  styleUrls: ['./hotel-cost-crud.component.css']
})
export class HotelCostCrudComponent implements OnInit {

  constructor(private router:Router,private service:HotelCostDetailsService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private booking:HotelbookingserviceService,private hotelList:HotelListDetailsService) { }

  CostCurd:Array<HotelCostDetails>
  Booking:Array<UserBookingData>
  hotelListdetails:Array<HotellistDetails>


  
  uCostForm:FormGroup;
  uamount:AbstractControl;
  utax:AbstractControl;

  ngOnInit(): void {

    this.booking.GetAllBooking().subscribe(
      (res:Array<UserBookingData>)=>{
        this.Booking=res;
      },
      (err)=>{console.log(err)}
    );
    this.hotelList.GetAllList().subscribe(
      (res:Array<HotellistDetails>)=>{
       this.hotelListdetails=res;
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
    this.service.GetAllCost().subscribe(
      (res:Array<HotelCostDetails>)=>{this.CostCurd=res},
      (err)=>{
        console.log(err);
        if(err.status)
        {
         
          sessionStorage.removeItem('token');
          this.router.navigateByUrl('404');
         
        }
      }
    );
  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }
  Tax=0;
  Amount=0;
  CostId:number;
  Edit(item:HotelCostDetails)
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
    let UpdateData:HotelCostDetails={amount:Amount,tax:Tax,totelAmount:TotelAmount,costId:this.CostId};


    this.service.UpdateCost(this.CostId,UpdateData).subscribe(
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

    for (const iterator of this.hotelListdetails)
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
      alert("Plase Delete The Hotel  Booking And List of hotel  Releted To This Cost")
    }

  }

}
