import { BrandsService } from './../brands.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BrandList } from '../BrandList';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  dataSaved = false;
  brands : BrandList[]=[];
  BrandForm: any;
  allBrands: any;
  brandIdUpdate = 0;
  productDescription : any;


  constructor(private formbuilder: FormBuilder, private productService: BrandsService) { }

  ngOnInit() {
    this.loadAllBrands();  
    }
  
  loadAllBrands() {  
    this.productService.getAllBrands().subscribe(data=>{ this.allBrands = data;console.log(data)});
   }  

}
