import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnlyCharactorAllowed, OnlyDigitAllowed } from 'src/app/customvalidators';
import { HotelBookingCrud } from 'src/app/Models/HotelBookingCrud';
import { HotelBookingCrudService } from 'src/app/Services/HotelBookingCrud/hotel-booking-crud.service';

@Component({
  selector: 'app-hotel-booking-crud',
  templateUrl: './hotel-booking-crud.component.html',
  styleUrls: ['./hotel-booking-crud.component.css']
})
export class HotelBookingCrudComponent implements OnInit {

  constructor(private service:HotelBookingCrudService,private fb:FormBuilder,private cdr: ChangeDetectorRef) { }

  HotelBooking:Array<HotelBookingCrud>
  userfirstname:AbstractControl;
  usermiddlename:AbstractControl;
  userlastname:AbstractControl;
  useremail:AbstractControl;
  userPhoneNumber:AbstractControl;
  Guest:AbstractControl;
  UserData:FormGroup;
  ngOnInit(): void {

    this.UserData=this.fb.group({
      UserFirstName:['',[Validators.required,OnlyCharactorAllowed]],
      UserMiddleName:['',[Validators.required,OnlyCharactorAllowed]],
      UserLastName:['',[Validators.required,OnlyCharactorAllowed]],
      UserEmail:['',[Validators.required,Validators.email]],
      UserPhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      Guest:['',Validators.required]

      
    });
    this.userfirstname=this.UserData.get('UserFirstName');
    this.usermiddlename=this.UserData.get('UserMiddleName');
    this.userlastname=this.UserData.get('UserLastName');
    this.useremail=this.UserData.get('UserEmail');
    this.userPhoneNumber=this.UserData.get('UserPhoneNumber');
    this.Guest=this.UserData.get('Guest');



    this.getAllBooking();
  }

  getAllBooking()
  {
    this.service.GetAllHotelBooking().subscribe
    (
      (res:Array<HotelBookingCrud>)=>{this.HotelBooking=res},
      (err)=>{console.log(err)}
    )
  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }

  ufirstname="";
  umiddlename="";
  ulastname="";
  uemail="";
  uphonenumber=9106832759;
  guest=0;
  costId: number;
  hotelId:number;
  contectId:number;
 conformationcode:string; 
  userId?:number;
  Edit(item:HotelBookingCrud)
  {
      this.ufirstname=item.userFirstName;
      this.umiddlename=item.userMiddleName;
      this.ulastname=item.userLastName;
      this.uemail=item.userEmail;
      this.uphonenumber=item.userContectNumber;
      this.guest=item.numberOfGuest;
      this.costId=item.costId;
      this.contectId=item.contectId;
      this.conformationcode=item.userReferenceNumumbar;
      this.userId=item.userId;

  }
  UpdateRrcord(){
    let updatedata:HotelBookingCrud={userFirstName:this.UserData.value.UserFirstName,userMiddleName:this.UserData.value.UserMiddleName,userLastName:this.UserData.value.UserLastName,userEmail:this.UserData.value.UserEmail,userContectNumber:this.UserData.value.UserPhoneNumber,numberOfGuest:this.UserData.value.Guest,userReferenceNumumbar:this.conformationcode,contectId:this.contectId,costId:this.costId,hotelId:this.hotelId,userId:this.userId}

    this.service.UpdateBooking(this.conformationcode,updatedata).subscribe(
      (res)=>{
        console.log(res);
        this.getAllBooking();
      },
      (err)=>{
        console.log(err);
        this.getAllBooking();
      }
    )
  }

  Delete(userReferenceNumumbar:string)
  {
    if(confirm("Are You sure You want To Delete Flight?"))
    {
      this.service.DeleteBooking(userReferenceNumumbar).subscribe(
        (res)=>{
          console.log(res);
          this.getAllBooking();
        },
        (err)=>
        {
          console.log(err);
          this.getAllBooking();
        }
      )
     }
}

}
