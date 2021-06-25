import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/Models/BrandCategory';
import { BrandCategoryService } from 'src/app/Services/brand-category.service';

@Component({
  selector: 'app-admin-brand',
  templateUrl: './admin-brand.component.html',
  styleUrls: ['./admin-brand.component.css']
})
export class AdminBrandComponent implements OnInit {

  constructor(private service : BrandCategoryService) { }

  ngOnInit(): void {
    this.GetBrands();
  }
  findName = '';
  Brands : Brand[] = [];
  AddFlag = false;
  GetBrands()
  {
    this.Brands = [];
    if(this.findName == '')
    {
      this.service.AllBrands().subscribe(data=>{
        this.Brands= data; 
      });
    }
    else
    {
      this.service.SearchBrand(this.findName).subscribe(data=>{
        this.Brands = data;
      });
    }
  }
  brand : Brand = {
    brandName : ''
  }
  EditData(Id : number | undefined)
  {
    this.service.BrandById(Id as number).subscribe(data=>{
      this.brand = data;
    });
  }
  Reset()
  {
    this.brand.brandId =undefined;
    this.brand.brandName = '';
  }
  Edit()
  {
    this.service.UpdateBrand(this.brand).subscribe(data=>{
      if(data==true)
      {
        alert("Updated...");
        this.GetBrands();
        this.Reset();
      }
      else
      {
        alert("Not updated...");
      }
    });
    
  }
  Add()
  {
    this.service.CreateBrand(this.brand).subscribe(data=>{
      if(data == 0)
      {
        alert("Not inserted...");
      }
      else
      {
        alert("Inserted and id : "+data);
        this.GetBrands();
        this.Reset();
      }
    });
  }
  Delete()
  {
    this.service.DeleteBrand(this.brand.brandId as number).subscribe(data=>{
      if(data == true)
      {
        alert("Deleted successfully...");
        this.GetBrands();
        this.Reset();
      }
      else
      {
        alert("Not deleted...");
      }
    })
    
  }
}
