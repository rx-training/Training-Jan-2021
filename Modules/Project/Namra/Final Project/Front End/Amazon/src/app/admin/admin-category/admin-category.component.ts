import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/BrandCategory';
import { BrandCategoryService } from 'src/app/Services/brand-category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  constructor(private service : BrandCategoryService) { }

  ngOnInit(): void {
    this.GetCategories();
  }
  findName = '';
  AddFlag = false;
  categories : Category[]=[];
  GetCategories()
  {
    if(this.findName=='')
    {
      this.service.AllCategories().subscribe(data=>{
        this.categories = data;
      });
    }
    else
    {
      this.service.SearchCategory(this.findName).subscribe(data=>{
        this.categories = data;
      });
    }
  }
  category : Category = {
    categoryName : ''
  }
  EditData(Id : number | undefined)
  {
    this.service.CategoryById(Id as number).subscribe(data=>{
      this.category = data;
    });
  }
  Reset()
  {
    this.category.categoryId =undefined;
    this.category.categoryName = '';
  }
  Edit()
  {
    this.service.UpdateCategory(this.category).subscribe(data=>{
      if(data==true)
      {
        alert("Updated...");
        this.GetCategories();
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
    this.service.CreateCategory(this.category).subscribe(data=>{
      if(data == 0)
      {
        alert("Not inserted...");
      }
      else
      {
        alert("Inserted and id : "+data);
        this.GetCategories();
        this.Reset();
      }
    });
  }
  Delete()
  {
    this.service.DeleteCategory(this.category.categoryId as number).subscribe(data=>{
      if(data == true)
      {
        alert("Deleted successfully...");
        this.GetCategories();
        this.Reset();
      }
      else
      {
        alert("Not deleted...");
      }
    })
  }
}
