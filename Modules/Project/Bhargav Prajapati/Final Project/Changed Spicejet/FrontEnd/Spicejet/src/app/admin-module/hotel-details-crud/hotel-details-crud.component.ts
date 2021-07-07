import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';
import { HotellistDetails } from 'src/app/ModelsSpicejet/HotelListDetails';
import { UserBookingData } from 'src/app/ModelsSpicejet/UserHotelBookingDetails';
import { HotelbookingserviceService } from 'src/app/ServicesSpicejet/HotelBookingService/hotelbookingservice.service';
import { HotelDetailsService } from 'src/app/ServicesSpicejet/HotelDetails/hotel-details.service';
import { HotelListDetailsService } from 'src/app/ServicesSpicejet/HotelListDetails/hotel-list-details.service';

@Component({
  selector: 'app-hotel-details-crud',
  templateUrl: './hotel-details-crud.component.html',
  styleUrls: ['./hotel-details-crud.component.css']
})
export class HotelDetailsCrudComponent implements OnInit {

  constructor(private router:Router,private service:HotelDetailsService,private booking:HotelbookingserviceService,private fb:FormBuilder,private hotelList:HotelListDetailsService,private cdr: ChangeDetectorRef) { }
  HotelData:Array<HotelDetails>;
  HotelList:Array<HotellistDetails>;
  Booking:Array<UserBookingData>



  HotelUpdateData:FormGroup;

  hotelname:AbstractControl;
  city:AbstractControl;
  state:AbstractControl;
  address:AbstractControl;
  pinnumber:AbstractControl;
  rAting:AbstractControl;
  hotelcontectnumber:AbstractControl;
  hotelemailaddress:AbstractControl;
  noofroomavailable:AbstractControl;
  costid:AbstractControl;
  contecttid:AbstractControl;
  ngOnInit(): void {

    
    this.booking.GetAllBooking().subscribe(
      (res:Array<UserBookingData>)=>{this.Booking=res},
      (err)=>{console.log(err)}
    )



      this.hotelList.GetAllList().subscribe(
        (res:Array<HotellistDetails>)=>{this.HotelList=res},
        (err)=>{console.log(err)}
      )
     
    this. HotelUpdateData=this.fb.group({
      HotelName:['',Validators.required],
      City:['',Validators.required],
      State:['',Validators.required],
      Address:['',Validators.required],
      PinNumber:['',Validators.required],
      Rating:['',Validators.required],
      HotelEmailAddress:['',Validators.required],
      HotelContectNumber:['',Validators.required],
      NoofRoomAvaliable:['',Validators.required],
    

    });
    this.hotelname=this.HotelUpdateData.get('HotelName');
    this.city=this.HotelUpdateData.get('City');
    this.state=this.HotelUpdateData.get('State');
    this.address=this.HotelUpdateData.get('Address');
    this.pinnumber=this.HotelUpdateData.get('PinNumber');
    this.rAting=this.HotelUpdateData.get('Rating');
    this.hotelcontectnumber=this.HotelUpdateData.get('HotelContectNumber');
    this.hotelemailaddress=this.HotelUpdateData.get('HotelEmailAddress');
    this.noofroomavailable=this.HotelUpdateData.get('NoofRoomAvaliable');
  


   this.GetAllHotel();
  }
  GetAllHotel()
  {
    this.service.GetAllHotel().subscribe(
      (res:Array<HotelDetails>)=>{
        this.HotelData=res;

      },
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

  hotelId=0;
  hotelName="";
  hotelCity="";
  hotelState="";
  hotelAddress="";
  pinNumber="";
  rating="";
  noOfRoomAvailable=0;
  imgPath1="";
  imgPath2="";
  imgPath3="";
  imgPath4="";
  hotelContectNumber="";
  hotelEmailAddress="";
  Edit(item:HotelDetails)
  {
      this.hotelId=item.hotelId;
      this.hotelName=item.hotelName;
      this.hotelCity=item.hotelCity;
      this.hotelState=item.hotelState;
      this.hotelAddress=item.hotelAddress;
      this.pinNumber=item.pinNumber;
      this.rating=item.rating;
      this.noOfRoomAvailable=item.numberOfRoomAvailable;
      this.imgPath1=item.imgPath1;
      this.imgPath2=item.imgPath2;
      this.imgPath3=item.imgPath3;
      this.imgPath4=item.imgPath4;
      this.hotelContectNumber=item.hotelContectNumber;
      this.hotelEmailAddress=item.hotelEmailAddress;




  }

  UpdateRecord()
  {
    let updatehotel:HotelDetails=
    {hotelId:this.hotelId,
      hotelName:this.HotelUpdateData.value.HotelName,
      hotelAddress:this.HotelUpdateData.value.Address,
      hotelCity:this.HotelUpdateData.value.City,
      hotelState:this.HotelUpdateData.value.State,
      pinNumber:this.HotelUpdateData.value.PinNumber,
      rating:this.HotelUpdateData.value.Rating,
      hotelContectNumber:this.HotelUpdateData.value.HotelContectNumber,
      hotelEmailAddress:this.HotelUpdateData.value.HotelEmailAddress,
      numberOfRoomAvailable:this.HotelUpdateData.value.NoofRoomAvaliable,
      imgPath1:this.imgPath1,
      imgPath2:this.imgPath2,
      imgPath3:this.imgPath3,
      imgPath4:this.imgPath4
    }
    console.log(updatehotel);
    this.service.UpdateHotel(updatehotel,this.hotelId,).subscribe(
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
          for (const iterator of this.HotelList)
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

              );
            }
          }
          if(count==1)
          {
              alert("Please First Delete the this Hotel Related Booking And List");
          }
  }

}
