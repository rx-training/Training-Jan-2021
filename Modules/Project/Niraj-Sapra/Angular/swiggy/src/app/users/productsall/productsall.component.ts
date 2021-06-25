import { Component, Inject, OnInit } from '@angular/core';
import { Category } from 'src/app/admin-penal/product/Category';
import { RestorentService } from '../../admin-penal/restaurant/restorent.service';
import {restaurant} from '../../admin-penal/restaurant/restaurant';
import { ProductdataService } from '../../admin-penal/product/productdata.service';
import {product} from '../../admin-penal/product/product';
import { CategoryService } from '../../admin-penal/product/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-productsall',
  templateUrl: './productsall.component.html',
  styleUrls: ['./productsall.component.css']
})
export class ProductsallComponent implements OnInit {
  dataSaved = false;
  restaurantdata : any = [];
  categorydata : any = [];
  productdata : any = [];
  constructor(private formbuilder: FormBuilder,private prod : ProductdataService , private http: RestorentService, private catedata: CategoryService,@Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    this.prod.getAllproduct().subscribe(data=>{console.log(data);
      this.productdata = data;
      });
    this.http.getAll().subscribe(data=>{console.log(data);
      this.restaurantdata = data;
      });
      this.catedata.getAllproduct().subscribe(data=>{console.log(data);
        this.categorydata = data;
        });
  }
  category(index:number){
    let checks:Category[] =  this.categorydata.filter(s=>s.categoryId == index );
    return checks[0].categoryName;
  }
  Image(index:string){
    console.log(index);
    var str = "../../../assets/img/Categories/Restaurants/"+index;
    return str;
  }
}
