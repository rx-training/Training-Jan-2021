import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelBookingCrud } from 'src/app/Models/HotelBookingCrud';
import { HotelContectCrud } from 'src/app/Models/HotelContectCrud';
import { HotelCostCurd } from 'src/app/Models/HotelCostCrud';
import { HotelDetailsCrud } from 'src/app/Models/HotelDetailsCrud';
import { HotelBookingCrudService } from 'src/app/Services/HotelBookingCrud/hotel-booking-crud.service';
import { HotelContactCrudService } from 'src/app/Services/HotelContactCrud/hotel-contact-crud.service';
import { HotelCostCrudService } from 'src/app/Services/HotelCostCrud/hotel-cost-crud.service';
import { HotelDetailsCrudService } from 'src/app/Services/HotelDetailsCrud/hotel-details-crud.service';

@Component({
  selector: 'app-hotel-details-crud',
  templateUrl: './hotel-details-crud.component.html',
  styleUrls: ['./hotel-details-crud.component.css']
})
export class HotelDetailsCrudComponent implements OnInit {

  constructor(private service:HotelDetailsCrudService,private booking:HotelBookingCrudService,private fb:FormBuilder,private hotelcost:HotelCostCrudService,private hotelcontect:HotelContactCrudService,private cdr: ChangeDetectorRef) { }
  HotelData:Array<HotelDetailsCrud>;
  CostData:Array<HotelCostCurd>;
  ContectData:Array<HotelContectCrud>;
  Booking:Array<HotelBookingCrud>



  HotelUpdateData:FormGroup;

  hotelname:AbstractControl;
  city:AbstractControl;
  state:AbstractControl;
  address:AbstractControl;
  pinnumber:AbstractControl;
  rAting:AbstractControl;
  startingtime:AbstractControl;
  closingtime:AbstractControl;
  noofroomavailable:AbstractControl;
  costid:AbstractControl;
  contecttid:AbstractControl;
  ngOnInit(): void {

    
    this.booking.GetAllHotelBooking().subscribe(
      (res:Array<HotelBookingCrud>)=>{this.Booking=res},
      (err)=>{console.log(err)}
    )



      this.hotelcost.getAllCost().subscribe(
        (res:Array<HotelCostCurd>)=>{this.CostData=res},
        (err)=>{console.log(err)}
      )
      this.hotelcontect.getAllContect().subscribe(
        (res:Array<HotelContectCrud>)=>{this.ContectData=res},
        (err)=>{console.log(err)}
      )
    this. HotelUpdateData=this.fb.group({
      HotelName:['',Validators.required],
      City:['',Validators.required],
      State:['',Validators.required],
      Address:['',Validators.required],
      PinNumber:['',Validators.required],
      Rating:['',Validators.required],
      StatingTime:['',Validators.required],
      ClosingTime:['',Validators.required],
      NoofRoomAvaliable:['',Validators.required],
      CostId:['',Validators.required],
      ContectId:['',Validators.required]

    });
    this.hotelname=this.HotelUpdateData.get('HotelName');
    this.city=this.HotelUpdateData.get('City');
    this.state=this.HotelUpdateData.get('State');
    this.address=this.HotelUpdateData.get('Address');
    this.pinnumber=this.HotelUpdateData.get('PinNumber');
    this.rAting=this.HotelUpdateData.get('Rating');
    this.startingtime=this.HotelUpdateData.get('StatingTime');
    this.closingtime=this.HotelUpdateData.get('ClosingTime');
    this.noofroomavailable=this.HotelUpdateData.get('NoofRoomAvaliable');
    this.costid=this.HotelUpdateData.get('CostId');
    this.contecttid=this.HotelUpdateData.get('ContectId'); 


   this.GetAllHotel();
  }
  GetAllHotel()
  {
    this.service.GetAllHotel().subscribe(
      (res:Array<HotelDetailsCrud>)=>{
        this.HotelData=res;
      }
    );
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }

  hotelId=0;
  hotelName="";
  hotelCity="";
  hotelState="";
  hotelAddress="";
  pinNumber=0;
  rating="";
  startingTime="";
  closingTime="";
  noOfRoomAvailable=0;
  imgPath1="";
  imgPath2="";
  imgPath3="";
  imgPath4="";
  contectId=0;
  costId=0;
  Edit(item:HotelDetailsCrud)
  {
      this.hotelId=item.hotelId;
      this.hotelName=item.hotelName;
      this.hotelCity=item.hotelCity;
      this.hotelState=item.hotelState;
      this.hotelAddress=item.hotelAddress;
      this.pinNumber=item.pinNumber;
      this.rating=item.rating;
      this.startingTime=item.startingTime;
      this.closingTime=item.closingTime;
      this.noOfRoomAvailable=item.noOfRoomAvailable;
      this.imgPath1=item.imgPath1;
      this.imgPath2=item.imgPath2;
      this.imgPath3=item.imgPath3;
      this.imgPath4=item.imgPath4;
      this.contectId=item.contectId;
      this.costId=item.costId;


  }

  UpdateRecord()
  {
    let updatehotel:HotelDetailsCrud={hotelId:this.hotelId,hotelName:this.HotelUpdateData.value.HotelName,hotelAddress:this.HotelUpdateData.value.Address,hotelCity:this.HotelUpdateData.value.City,hotelState:this.HotelUpdateData.value.State,pinNumber:this.HotelUpdateData.value.PinNumber,rating:this.HotelUpdateData.value.Rating,startingTime:this.HotelUpdateData.value.StatingTime,closingTime:this.HotelUpdateData.value.ClosingTime,noOfRoomAvailable:this.HotelUpdateData.value.NoofRoomAvaliable,contectId:this.HotelUpdateData.value.ContectId,costId:this.HotelUpdateData.value.CostId,imgPath1:this.imgPath1,imgPath2:this.imgPath2,imgPath3:this.imgPath3,imgPath4:this.imgPath4}
    console.log(updatehotel);
    this.service.UpdateHotel(this.hotelId,updatehotel).subscribe(
      (res)=>{
        console.log(res);
        this.GetAllHotel();
      },
      (err)=>{
        console.log(err);
        this.GetAllHotel();
      }
    );
  }
  DeleteData(hotelId:number)
  {
    let count=0;
          for (const iterator of this.Booking)
          {
           
              if(iterator.hotelId==hotelId)
              {
                count=1;
                console.log(count)
                break;
                
              }  
          }

          if(count==0)
          {
            if(confirm("Are You Sure You Want To Delete This Hotel"))
            {
              this.service.DeleteHotel(hotelId).subscribe(
                (res)=>{
                  console.log(res);
                  this.GetAllHotel();
                },
                (err)=>{
                  console.log(err);
                  this.GetAllHotel();
                }

              )
            }
          }
          if(count==1)
          {
              alert("Please First Delete the this Hotel Related Booking");
          }
  }

}
