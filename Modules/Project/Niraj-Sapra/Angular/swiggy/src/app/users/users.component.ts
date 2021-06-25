import { Component, OnInit,Inject, SimpleChanges } from '@angular/core';
import {Citymodel} from '../admin-penal/city/Citymodel';
import { CitydataService } from '../admin-penal/city/citydata.service';
import {restaurant} from '../admin-penal/restaurant/restaurant';
import { RestorentService } from '../admin-penal/restaurant/restorent.service';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';import { ActivatedRoute } from "@angular/router";
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSaved = false;
  citysdata :Citymodel[]=[];
  cityForm :any;
  constructor(private formbuilder: FormBuilder,private resservice:RestorentService,private dataservice:CitydataService,@Inject(DOCUMENT) private _document: Document) { }
  ngOnInit(): void {

    this.getloaddata();
  }
  getloaddata(){
    this.dataservice.getAllCity().subscribe((data)=>{​​​​console.log(data);​​​​
      this.citysdata = data    
    });
  }
  
  refreshPage() {
    this._document.defaultView.location.reload();
  }
}
