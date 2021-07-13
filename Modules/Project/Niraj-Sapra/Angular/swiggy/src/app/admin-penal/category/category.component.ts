import { CategoryService } from '../product/category.service';
import { Category } from '../product/Category';
import { restaurant } from '../restaurant/restaurant';
import { Component,Inject, OnInit } from '@angular/core';
import {RestorentService} from '../restaurant/restorent.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataSaved = false;
  cityForm :any;
  closeResult:string;
  studentIdUpdate = 1;
  resid:number;
  updateid:number;
  catnames : string;
  resnames : string;
  updateusername : string;
  restaurantName :string;
  usersingupdatas : any = [];
  restaurantdata : restaurant[] = [];
  constructor(private formbuilder: FormBuilder,private modalService: NgbModal, private https: RestorentService, private http: CategoryService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.http.getAllproduct().subscribe(data=>{
    this.usersingupdatas = data;
    console.log(data);
    
  });
    this.https.getAll().subscribe(data=>{
      this.restaurantdata = data; });
    
    this.cityForm = this.formbuilder.group({

      categoryName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-z A-Z]+$')])],
      ucategoryName : ['',Validators.compose([Validators.required,Validators.pattern('^[a-z A-Z]+$')])],
      resnames : ['',[Validators.required]],
      uresnames : ['',[Validators.required]]
    });
  }
  refreshPage() {
    this._document.defaultView.location.reload();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  
    this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
//add new user
  addnewdata(value:any){
    const citysd = this.cityForm.value;
    var cityno :number = 0;
    this.usersingupdatas.forEach(Element => {
      console.log( citysd.resnames);
      console.log( citysd.categoryName);
      
     if(Element.resName == citysd.resnames && Element.categoryName == citysd.categoryName){
      console.log("enter");
      cityno =  1;
     }    
    });  
  if(cityno == 0){
    var no=0;
    if(citysd.categoryName == '' || citysd.resnames ==''){
     no=1;
    }
    if(no == 0){
      console.log(citysd.resnames.restaurantName+citysd.categoryName+citysd.resnames.restaurantId);  
      // this.http.PushnewProduct({
      //     categoryId : 0,
      //     resName : citysd.resnames.restaurantName,
      //     categoryName : citysd.categoryName,
      //     resId : citysd.resnames.restaurantId ,
      // }).subscribe();
      this.http.PushnewProduct({
          categoryId : 0,
          resName : citysd.resnames.restaurantName,
          categoryName : citysd.categoryName,
          resId : citysd.resnames.restaurantId ,
      }).subscribe();
    }
      this.cityForm.reset();
    //this.refreshPage();
    }
  }
  closemodel(){
    var element = document.getElementById('AddModal');
    element.classList.add('removeclass');
    this.refreshPage(); 
  }

  deleterow(index:number){
    this.http.deletecityById(index).subscribe((res)=>{
      this.refreshPage();
    });
    }

}
