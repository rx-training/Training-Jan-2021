import { Component, OnInit,Inject, SimpleChanges } from '@angular/core';
import {Citymodel} from './Citymodel';
import { CitydataService } from './citydata.service';
import { DOCUMENT } from '@angular/common';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit{
  dataSaved = false;
  citysdata :any=[];
  cityForm :any;
  updateForm:any;
  ucityid:number;
  cityname: string;
  updatecityname:string;
  updateid :number;
  updatecity:string;
  constructor(private formbuilder: FormBuilder,private dataservice:CitydataService,@Inject(DOCUMENT) private _document: Document) { }
  

  ngOnInit(): void {
    this.getloaddata();
    this.cityForm = this.formbuilder.group({
      cityname : ['',[Validators.required]
    ]
    });
  }
  
  getloaddata(){
    this.dataservice.getAllCity().subscribe((data)=>{​​​​​​​​
      this.citysdata = data    
    });
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }

  addcitys(value : any){
    const citysd = this.cityForm.value;
    var cityno :number = 0;
    this.citysdata.forEach(Element => {console.log(Element.cityName);
     if(Element.cityName == citysd.cityname){
      cityno =  1;
     }    
    });  
  if(cityno == 0){
      this.dataservice.PushnewCity({cityId:0,cityName:citysd.cityname}).subscribe();
      this.cityForm.reset();
      this.refreshPage();
    } 
  }

  colseuse(){
    var element = document.getElementById('updateCitY');
    element.classList.add('removeclass');
    this.refreshPage(); 
  }

  deleterow(index){
    this.dataservice.deletecityById(index).subscribe((res)=>{
      let checks:Citymodel[] =  this.citysdata.filter(s=>s.cityId == index);
      this.citysdata.splice(checks[0]);
      this.refreshPage();
    });
    }

  updaterow(index){
   this.updateid = index;
   let checks:Citymodel[] =  this.citysdata.filter(s=>s.cityId == index);
   this.updatecity= checks[0].cityName;
   var element = document.getElementById('updateCitY');
   element.classList.add('displayclass'); 
  }

  updatecitys(value : any){ 
    const ucitysd = this.cityForm.value;
    if(ucitysd.cityname != " " && typeof(ucitysd.cityname)=="string"){
      this.dataservice.updateStudent(this.updateid,{cityId:this.updateid,cityName:ucitysd.cityname}).subscribe();
      this.refreshPage();
    }
  }
  
}
