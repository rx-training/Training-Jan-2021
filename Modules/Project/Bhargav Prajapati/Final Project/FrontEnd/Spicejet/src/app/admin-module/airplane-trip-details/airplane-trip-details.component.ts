import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnlyCharactorAllowed } from 'src/app/customvalidators';
import { AirplaneBookingCrud } from 'src/app/Models/AirplaneBookingCrud';
import { AirplaneCostCrud } from 'src/app/Models/AirplaneCostCrud';
import { AirPLaneCrud } from 'src/app/Models/AirplaneCrud';
import { AirplaneTripCrud } from 'src/app/Models/AirplaneTripCrud';
import { AirplaneBookingCrudService } from 'src/app/Services/AirplaneBookingCrud/airplane-booking-crud.service';
import { AirplaneCostCrudService } from 'src/app/Services/AirplaneCostCrud/airplane-cost-crud.service';
import { AirplaneCrudService } from 'src/app/Services/AirplaneCrud/airplane-crud.service';
import { AirplaneTripCrudService } from 'src/app/Services/AirplaneTripCrud/airplane-trip-crud.service';

@Component({
  selector: 'app-airplane-trip-details',
  templateUrl: './airplane-trip-details.component.html',
  styleUrls: ['./airplane-trip-details.component.css']
})
export class AirplaneTripDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef, private service: AirplaneTripCrudService, private Booking: AirplaneBookingCrudService, private Airplane: AirplaneCrudService, private AirplaneCost: AirplaneCostCrudService) { }
  AirplanTrip: Array<AirplaneTripCrud>
  BookingPlane: Array<AirplaneBookingCrud>
  AirPlaneId: Array<AirPLaneCrud>
  AirplaneCostId: Array<AirplaneCostCrud>

  EditForm: FormGroup;
  InsertForm: FormGroup;

  departcity: AbstractControl;
  arrivedcity: AbstractControl;
  departairportname: AbstractControl;
  arrivedairportname: AbstractControl;
  // departdate:AbstractControl;
  // arriveddate:AbstractControl;
  departtime: AbstractControl;
  arrivedtime: AbstractControl;
  planeid: AbstractControl;
  costid: AbstractControl;


  Idepartcity: AbstractControl;
  Iarrivedcity: AbstractControl;
  Idepartairportname: AbstractControl;
  Iarrivedairportname: AbstractControl;
  Ideparttime: AbstractControl;
  Iarrivedtime: AbstractControl;
  Iplaneid: AbstractControl;
  Icostid: AbstractControl;
  IDepartDate: AbstractControl
  IArrivedDate: AbstractControl;

  ngOnInit(): void {
    this.EditForm = this.fb.group({
      DepatureCity: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivalCity: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivedAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartTime: ['', Validators.required],
      ArrivedTime: ['', Validators.required],
      PlaneId: ['', Validators.required],
      CostId: ['', Validators.required]
    });

    this.InsertForm = this.fb.group({

      DepatureCity: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivalCity: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      ArrivedAirportName: ['', [Validators.required, OnlyCharactorAllowed]],
      DepartTime: ['', Validators.required],
      ArrivedTime: ['', Validators.required],
      PlaneId: ['', Validators.required],
      CostId: ['', Validators.required],
      DepartDate: ['', Validators.required],
      ArrivedDate: ['', Validators.required]


    });


    this.departcity = this.EditForm.get('DepatureCity');
    this.arrivedcity = this.EditForm.get('ArrivalCity');
    this.departairportname = this.EditForm.get('DepartAirportName');
    this.arrivedairportname = this.EditForm.get('ArrivedAirportName');
    this.departtime = this.EditForm.get('DepartTime');
    this.arrivedtime = this.EditForm.get('ArrivedTime');
    this.planeid = this.EditForm.get('PlaneId');
    this.costid = this.EditForm.get('CostId');


    this.Idepartcity = this.InsertForm.get('DepatureCity');
    this.Iarrivedcity = this.InsertForm.get('ArrivalCity');
    this.Idepartairportname = this.InsertForm.get('DepartAirportName');
    this.Iarrivedairportname = this.InsertForm.get('ArrivedAirportName');
    this.Ideparttime = this.InsertForm.get('DepartTime');
    this.Iarrivedtime = this.InsertForm.get('ArrivedTime');
    this.Iplaneid = this.InsertForm.get('PlaneId');
    this.Icostid = this.InsertForm.get('CostId');
    this.IDepartDate = this.EditForm.get('DepartDate');
    this.IArrivedDate = this.EditForm.get('ArrivedDate');





    this.GetAllFlightTrip();



    this.Booking.GetAllBooking().subscribe(
      (res: Array<AirplaneBookingCrud>) => { this.BookingPlane = res },
      (err) => { console.log(err) }
    )


    this.Airplane.getAllAirplane().subscribe(
      (res: Array<AirPLaneCrud>) => { this.AirPlaneId = res },
      (err) => { console.log(err) }
    )


    this.AirplaneCost.getAllAirplaneCost().subscribe(
      (res: Array<AirplaneCostCrud>) => {
        this.AirplaneCostId = res;
      }
    )



  }
  GetAllFlightTrip() {
    this.service.GetAllFlightTrip().subscribe(
      (res: Array<AirplaneTripCrud>) => { this.AirplanTrip = res },
      (err) => { console.log(err) })
  }
  ngAfterViewChecked() {
    //your code to update the model
    this.cdr.detectChanges();
  }
  DeletedTrip(id: number) {
    let count = 0;

    for (const iterator of this.BookingPlane) {
      if (iterator.travelId == id) {

        count = 1;
        break;
      }
    }


    if (count == 1) {
      alert("Please First Delete the Booking Of This Filght");
    }
    else {
      if (confirm("Are You Sure You Want To Delete Flight Trip")) {
        this.service.DeleteTrip(id).subscribe(
          (res) => {
            console.log(res);

          },
          (err) => {
            console.log(err);
            this.AirplanTrip.splice(this.AirplanTrip.indexOf(this.AirplanTrip.filter(s => s.travelId == id)[0]), 1)
            alert("Successfully Deleted Flight Trip");

          }
        );
      }
    }
  }

  DepatureCity = "";
  ArrivalCity = "";
  DepatureAirportName = "";
  ArrivalAirportName = "";
  DepatureTime = "";
  ArrivalTime = "";
  AirplaneId = 0;
  CostId = 0;
  DepartDate: Date;
  ArrivedDate: Date;
  TripId: number;
  Save(item: AirplaneTripCrud) {
    this.DepatureCity = item.depatureCity;
    this.ArrivalCity = item.arrivedCity;
    this.DepatureAirportName = item.depatureAirPortName;
    this.ArrivalAirportName = item.arriveAirPortName;
    this.DepatureTime = item.departTime;
    this.ArrivalTime = item.arriveTime;
    this.AirplaneId = item.airPlaneId;
    this.CostId = item.costId;
    this.DepartDate = item.departDate;
    this.ArrivedDate = item.arriveDate;
    this.TripId = item.travelId





  }

  Update() {
    let data: AirplaneTripCrud = { depatureCity: this.EditForm.value.DepatureCity, arrivedCity: this.EditForm.value.ArrivalCity, departDate: this.DepartDate, arriveDate: this.ArrivedDate, arriveAirPortName: this.EditForm.value.ArrivedAirportName, depatureAirPortName: this.EditForm.value.DepartAirportName, departTime: this.EditForm.value.DepartTime, arriveTime: this.EditForm.value.ArrivedTime, costId: this.EditForm.value.CostId, airPlaneId: this.EditForm.value.PlaneId, travelId: this.TripId }

    this.service.UpdateTrip(this.TripId, data).subscribe(
      (res) => { console.log(res) },
      (err) => {
        console.log(err)
        this.GetAllFlightTrip();
      }
    );

  }

  AddTrip() {
    let Insertdata: AirplaneTripCrud = { depatureCity: this.InsertForm.value.DepatureCity, arrivedCity: this.InsertForm.value.ArrivalCity, depatureAirPortName: this.InsertForm.value.DepartAirportName, arriveAirPortName: this.InsertForm.value.ArrivedAirportName, departDate: this.InsertForm.value.DepartDate, arriveDate: this.InsertForm.value.ArrivedDate, arriveTime: this.InsertForm.value.ArrivedTime, departTime: this.InsertForm.value.DepartTime, airPlaneId: this.InsertForm.value.PlaneId, costId: this.InsertForm.value.CostId }
    this.service.InsertTrip(Insertdata).subscribe(
      (res) => {
        console.log(res);
        this.GetAllFlightTrip();
      },
      (err) => {
        console.log(err);
        this.GetAllFlightTrip();
      }

    )

  }

}
