import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotelBookingCrud } from 'src/app/Models/HotelBookingCrud';
import { HotelContectCrud } from 'src/app/Models/HotelContectCrud';
import { HotelDetailsCrud } from 'src/app/Models/HotelDetailsCrud';
import { HotelBookingCrudService } from 'src/app/Services/HotelBookingCrud/hotel-booking-crud.service';
import { HotelContactCrudService } from 'src/app/Services/HotelContactCrud/hotel-contact-crud.service';
import { HotelDetailsCrudService } from 'src/app/Services/HotelDetailsCrud/hotel-details-crud.service';

@Component({
  selector: 'app-hotel-contact-crud',
  templateUrl: './hotel-contact-crud.component.html',
  styleUrls: ['./hotel-contact-crud.component.css']
})
export class HotelContactCrudComponent implements OnInit {

  constructor(private service:HotelContactCrudService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private hoteldetails:HotelDetailsCrudService,private hotelbooking:HotelBookingCrudService) { }

  ContactCrud:Array<HotelContectCrud>;
  hotelbookingCrud:Array<HotelBookingCrud>;
  hoteldetailscrud:Array<HotelDetailsCrud>;

  HotelContact:FormGroup;

  hotelcontect:AbstractControl;
  hotelEmail:AbstractControl;
  ngOnInit(): void {
    this.HotelContact=this.fb.group(
      {
          HotelContect:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
          HotelEmail:['',[Validators.required,Validators.email]]  
      }
    );

    this.hotelcontect=this.HotelContact.get('HotelContect');
    this.hotelEmail=this.HotelContact.get('HotelEmail');

    this.getAllContect();

    this.hoteldetails.GetAllHotel().subscribe(
      (res:Array<HotelDetailsCrud>)=>{
        this.hoteldetailscrud=res;
      },
      (err)=>{
        console.log(err);
      }
    );
    this.hotelbooking.GetAllHotelBooking().subscribe(
      (res:Array<HotelBookingCrud>)=>{
        this.hotelbookingCrud=res;
      },
      (err)=>{
        console.log(err);
      }
    )

  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }

  getAllContect()
  {
    this.service.getAllContect().subscribe(
      (res: Array<HotelContectCrud>)=>{
        this.ContactCrud=res;
      },
      (err)=>{console.log(err)}
    )
  }
  hotelcontectId=0;
  hotelmobileNumber=0;
  hotelemail="";
  Edit(item:HotelContectCrud)
  {
          this.hotelcontectId=item.hotelContectId;
          this.hotelmobileNumber=item.hotelMobileNumber;
          this.hotelemail=item.hotelEmail;
      
  }

  Update()
  {
        let hoteldata:HotelContectCrud={hotelContectId:this.hotelcontectId,hotelEmail:this.HotelContact.value.HotelEmail,hotelMobileNumber:this.HotelContact.value.HotelContect}
        this.service.UpdateContact(this.hotelcontectId,hoteldata).subscribe(
          (res)=>{
            console.log(res);
            this.getAllContect();
          },
          (err)=>{
            console.log(err);
            this.getAllContect();
          }
        );
  }

  Delete(hotelContectId)
  {
       let count1:number=0;
       let count2:number=0;

       for (const iterator of this.hotelbookingCrud)
        {
            if(iterator.contectId==hotelContectId)
            {
              count1=1;
              break;
            }
        }
        for (const iterator of this.hoteldetailscrud)
        {
            if(iterator.contectId==hotelContectId)
            {
              count2=1;
              break;
            }
        }

        if(count1==0 && count2==0)
        {
          if(confirm("Are You Sure You Want to Delete The Flight"))
          {
          this.service.DeleteContact(hotelContectId).subscribe(
            (res)=>{
              console.log(res);
              this.getAllContect();
            },
            (err)=>{
              console.log(err);
              this.getAllContect();
            }
          )
        }
      }
        if(count1==1 || count2==1)
        {
          alert("please First You can delete the Hotel Booking And Hotel releted to this contect");
        }

  }
}
