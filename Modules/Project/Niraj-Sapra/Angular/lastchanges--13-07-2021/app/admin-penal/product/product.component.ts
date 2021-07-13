import { Component, OnInit,Inject } from '@angular/core';
import {product} from './product';
import {Category} from './Category';
import { DOCUMENT } from '@angular/common';
import { ProductdataService } from './productdata.service';
import { CategoryService } from './category.service';
import { RestorentService } from '../restaurant/restorent.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { restaurant } from '../restaurant/restaurant';
import { RestaurantComponent } from '../restaurant/restaurant.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  dataSaved = false;
  productsdata :product[];
  categorys : Category[];
  restaurantdata : restaurant[];
  cityForm :any;
  updateid :number;
  updatename:string;
  updateprice:number;
  uproductname:string;
  uproductprice:number;
  productname:string;
  productimage:string;
  mainimages:string;
  productid:number;
  closeResult: string;
  constructor(private formbuilder: FormBuilder,private modalService: NgbModal,private resdata:RestorentService,private categorysdata:CategoryService,private dataservice:ProductdataService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.categorysdata.getAllproduct().subscribe(data=>{
      this.categorys = data;
    console.log(this.categorys);
  });
  this.resdata.getAll().subscribe(data=>{
    this.restaurantdata = data;
  console.log(this.restaurantdata);
});
      this.dataservice.getAllproduct().subscribe(data=>{
        this.productsdata = data;
      console.log(this.productsdata);
    });    
    this.cityForm = this.formbuilder.group({
      uproductname : ['',[Validators.required]],
      uproductprice : ['',[Validators.required]],
      productname :  ['',[Validators.required]],
      productprice : ['',[Validators.required]],
      productimage :  ['',[Validators.required]],
      resnames :  ['',[Validators.required]],
      categoryes:  ['',[Validators.required]],
      uresnames :  ['',[Validators.required]],
      ucategoryes:  ['',[Validators.required]]
    });
    }

    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {console.log("working");
      console.log(result);
        
      this.closeResult = `Closed with: ${result}`;
        console.log(this.closeResult);
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

    onFileSelected(event) {
      if(event.target.files.length > 0) 
       {
         console.log(event.target.files[0].name);
         this.mainimages = event.target.files[0].name;
       }
     }
    refreshPage() {
      this._document.defaultView.location.reload();
    }
    Category(index:number){
      let checks:Category[] =  this.categorys.filter(s=>s.categoryId == index );
      return checks[0].categoryName;
    }
    // Restarant(index:number){
    //   let checks:restaurant[] =  this.restaurantdata.filter(s=>s.restaurantId == index );
    //   console.log(checks[0].restaurantName);
    //   return checks[0].restaurantName;
    // }
    reverseCategory(index:string){
      let checks:Category[] =  this.categorys.filter(s=>s.categoryName == index );    
      return checks[0].categoryId;
    }
    reverseRestarant(index:string){
      let checks:restaurant[] =  this.restaurantdata.filter(s=>s.restaurantName == index );
      return checks[0].restaurantId;
      
    }
    addproduct(value : any){
      console.log("workings");
      const citysd = this.cityForm.value;
      var cityno :number = 0;
      this.productsdata.forEach(Element => {
       if(Element.productName == citysd.uproductname){
        cityno =  1;
      }    
      });  
    if(cityno == 0 && citysd.productname != " " && citysd.productprice != " " && citysd.productimage != " " ){
     this.dataservice.PushnewProduct({productId:0,categoryid:this.reverseCategory(citysd.categoryes.categoryName),restaurantId:this.reverseRestarant(citysd.resnames.restaurantName),productName:citysd.productname,productPrice:citysd.productprice,productImage:this.mainimages}).subscribe(); 
     this.cityForm.reset();
     this.refreshPage();
      } 
    }
 
    colseuse(){
      var element = document.getElementById('updateProduct');
      element.classList.add('removeclass');
      this.refreshPage(); 
    }
  
     deleterow(index:number){
      this.dataservice.deletecityById(index).subscribe((res)=>{console.log("hello"+this.productsdata);
      this.refreshPage();
      });
    }
  
   updaterow(index:number){
      this.updateid = index;
      let checks:product[] =  this.productsdata.filter(s=>s.productId == index);
          this.updatename = checks[0].productName;
          this.updateprice = checks[0].productPrice;
          var element = document.getElementById('updateProduct');
      element.classList.add('displayclass'); 
     }
  
     updatecitys(value : any){ 
      const ucitysd = this.cityForm.value;
      let checks:product[] =  this.productsdata.filter(s=>s.productId == this.updateid);
      if(ucitysd.uproductname != " "  && ucitysd.uproductprice != " "){
        console.log("productId"+this.updateid,this.reverseCategory(ucitysd.ucategoryes.categoryName),this.reverseRestarant(ucitysd.uresnames.restaurantName),ucitysd.uproductname,ucitysd.uproductprice,checks[0].productImage);
        this.dataservice.updateStudent(this.updateid,{productId:this.updateid,categoryid:this.reverseCategory(ucitysd.ucategoryes.categoryName),restaurantId:this.reverseRestarant(ucitysd.uresnames.restaurantName),productName:ucitysd.uproductname,productPrice:ucitysd.uproductprice,productImage:checks[0].productImage}).subscribe();
        this.refreshPage();
      }
    }

}