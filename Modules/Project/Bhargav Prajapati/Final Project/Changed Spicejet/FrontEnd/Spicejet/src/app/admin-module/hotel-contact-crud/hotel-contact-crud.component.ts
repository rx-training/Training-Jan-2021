import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelCostDetails } from 'src/app/ModelsSpicejet/HotelCostDetails';
import { HotelDetails } from 'src/app/ModelsSpicejet/HotelDetails';
import { HotellistDetails } from 'src/app/ModelsSpicejet/HotelListDetails';
import { HotelCostDetailsService } from 'src/app/ServicesSpicejet/HotelCostDetails/hotel-cost-details.service';
import { HotelDetailsService } from 'src/app/ServicesSpicejet/HotelDetails/hotel-details.service';
import { HotelListDetailsService } from 'src/app/ServicesSpicejet/HotelListDetails/hotel-list-details.service';

@Component({
  selector: 'app-hotel-contact-crud',
  templateUrl: './hotel-contact-crud.component.html',
  styleUrls: ['./hotel-contact-crud.component.css']
})
export class HotelContactCrudComponent implements OnInit {

  constructor(private router:Router,private service:HotelListDetailsService,private fb:FormBuilder,private cdr: ChangeDetectorRef,private hoteldetails:HotelDetailsService,private hotelcst:HotelCostDetailsService) { }

  Hotelelist:Array<HotellistDetails>;
  hotelcost:Array<HotelCostDetails>;
  hoteldetailss:Array<HotelDetails>;

  HotelListData:FormGroup;

  costid:AbstractControl;
  hotelid:AbstractControl;
  ngOnInit(): void {
    this.HotelListData=this.fb.group(
      {
          CostId:['',Validators.required],
          HotelId:['',Validators.required]  
      }
    );

    this.costid=this.HotelListData.get('CostId');
    this.hotelid=this.HotelListData.get('HotelId');

    this.getAllList();

    this.hoteldetails.GetAllHotel().subscribe(
      (res:Array<HotelDetails>)=>{
        this.hoteldetailss=res;
      },
      (err)=>{
        console.log(err);
      }
    );
    this.hotelcst.GetAllCost().subscribe(
      (res:Array<HotelCostDetails>)=>{
        this.hotelcost=res;
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

  getAllList()
  {
    this.service.GetAllList().subscribe(
      (res: Array<HotellistDetails>)=>{
        this.Hotelelist=res;
      },
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
  cid=0;
  hid=0;
  lid=0;
  hotelmobileNumber=0;
  Edit(item:HotellistDetails)
  {
  
    this.cid=item.costId;
    this.hid= item.hotelId;
    this.lid=item.listId;        
      
  }

  Update()
  {
        let hotellist:HotellistDetails=
        {
          costId:this.HotelListData.value.CostId,
          hotelId:this.HotelListData.value.HotelId,
          listId:this.lid
        }
        this.service.UpdateList(this.lid,hotellist).subscribe(
          (res)=>{
            console.log(res);
            this.getAllList();
          },
          (err)=>{
            console.log(err);
            this.getAllList();
          }
        );
  }

  Delete(listId:number)
  {
          if(confirm("Are You Sure You Want to Delete The Flight"))
          {
                this.service.DeleteList(listId).subscribe(
                  (res)=>{
                    console.log(res);
                    this.getAllList()
                  },
                  (err)=>{
                    console.log(err);
                    this.getAllList();
                  }

                );
        }
      }
        

  }

