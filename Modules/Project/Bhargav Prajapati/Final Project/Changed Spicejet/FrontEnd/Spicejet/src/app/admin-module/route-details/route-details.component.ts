import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AirPlaneDetails } from 'src/app/ModelsSpicejet/AirplaneDetails';
import { CostDetails } from 'src/app/ModelsSpicejet/CostDetails';
import { RouteDetails } from 'src/app/ModelsSpicejet/RouteDetails';
import { TripDetails } from 'src/app/ModelsSpicejet/TripDetails';
import { AirplaneServiceService } from 'src/app/ServicesSpicejet/AirplaneSerice/airplane-service.service';
import { CostServiceService } from 'src/app/ServicesSpicejet/AirplneCostService/cost-service.service';
import { RouteDetailsService } from 'src/app/ServicesSpicejet/RouteService/route-details.service';
import { TripDetailsService } from 'src/app/ServicesSpicejet/TripDetails/trip-details.service';

@Component({
  selector: 'app-route-details',
  templateUrl: './route-details.component.html',
  styleUrls: ['./route-details.component.css']
})
export class RouteDetailsComponent implements OnInit {


  constructor(private router:Router,private fb:FormBuilder,private cdr: ChangeDetectorRef,private Service:RouteDetailsService,private tripservice:TripDetailsService,private CostService:CostServiceService,private airplaneservice:AirplaneServiceService) { }
  Route: Array<RouteDetails>
  Trip:Array<TripDetails>
  Cost:Array<CostDetails>
  Airplane:Array<AirPlaneDetails>


  Iairplaneid:AbstractControl;
  Icostid:AbstractControl;
  Itripid:AbstractControl;

  Uairplaneid:AbstractControl;
  Ucostid:AbstractControl;
  Utripid:AbstractControl;
  RouteInsertFrom:FormGroup;
  RouteUpdateForm:FormGroup;
  ngOnInit(): void {
      this.GetAllTrip();

this.RouteInsertFrom=this.fb.group(
  {
      TripID:['',Validators.required],
      CostId:['',Validators.required],
      AirplaneId:['',Validators.required]
  }
);
this.RouteUpdateForm=this.fb.group(
  {
      TripID:['',Validators.required],
      CostId:['',Validators.required],
      AirplaneId:['',Validators.required]

  }
);

this.Iairplaneid=this.RouteInsertFrom.get('AirplaneId');
this.Icostid=this.RouteInsertFrom.get('CostId');
this.Itripid=this.RouteInsertFrom.get('TripID');

this.Uairplaneid=this.RouteUpdateForm.get('AirplaneId');
this.Ucostid=this.RouteUpdateForm.get('CostId');
this.Utripid=this.RouteUpdateForm.get('TripID');
      this.tripservice.GetAllTrip().subscribe(
        (res:Array<TripDetails>)=>{
          this.Trip=res;
        },
        (err)=>{console.log(err)}
      );

      this.CostService.GetAllCost().subscribe(
        (res:Array<CostDetails>)=>{
          this.Cost=res;
        },
        (err)=>{
          console.log(err);
        }
      );
      this.airplaneservice.GetAllPlane().subscribe(
        (res)=>{
          this.Airplane=res;
        },
        (err)=>{
          console.log(err);
        }
      )

  }


  GetAllTrip()
  {
    this.Service.GetAllRoute().subscribe(
      (res:Array<RouteDetails>)=>{
        this.Route=res;
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

  DeleteTrip(tripId:number)
  {
    if(confirm("Are You Sure You Want To Delete The Route"))
    {
          this.Service.DeleteRoute(tripId).subscribe(
            (res)=>{
              console.log(res);
              this.GetAllTrip();
            },
            (err)=>{
              console.log(err);
              this.GetAllTrip()
            }
          )

        }

              }
  AddRoute()
  {
    let Insertdata:RouteDetails={
      airplaneId:this.RouteInsertFrom.value.AirplaneId,
      costId:this.RouteInsertFrom.value.CostId,
      tripId:this.RouteInsertFrom.value.TripID
    }
   this.Service.InsertRoute(Insertdata).subscribe(
     (res)=>{
       console.log(res);
       this.GetAllTrip();
     },
   (err)=>{
     console.log(err);
     this.GetAllTrip();
   }
   );
  }
  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
  }

  aid=0;
  cid=0;
  tid=0;
  Rid=0;
  Edit(item:RouteDetails)
  {
    
      this.aid=item.airplaneId;
      this.cid=item.costId;
      this.tid=item.tripId;
      this.Rid=item.routeId;
  } 

  UpdateRecord()
  {
    let data:RouteDetails={
      airplaneId:this.RouteUpdateForm.value.AirplaneId,
      costId:this.RouteUpdateForm.value.CostId,
      tripId:this.RouteUpdateForm.value.TripID,
      routeId:this.Rid
    }
    this.Service.UpdateRoute(data,this.Rid).subscribe(
      (res)=>{
        console.log(res);
        this.GetAllTrip();
      },
      (err)=>{
        console.log(err);
        this.GetAllTrip();
      }
    )
  }



}
