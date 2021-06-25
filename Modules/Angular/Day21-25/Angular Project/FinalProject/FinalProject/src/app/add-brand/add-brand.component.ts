import { BrandList } from './../BrandList';
import { BrandsService } from './../brands.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {
  hello : FormGroup;
  dataSaved = false;
  allBrands : any;
  BrandIdUpdate = 0;

  constructor(private formBuilder : FormBuilder,private brandService : BrandsService) {
    this.hello =  this.formBuilder.group({
      brandId : ['',Validators.compose([Validators.required])],
      brandname : ['',Validators.compose([Validators.required])],
      brandimage : ['',Validators.compose([Validators.required])]
    });
   }

   ngOnInit() {
    this.hello = this.formBuilder.group({
      brandId : ['',[Validators.required]],
      brandName : ['',[Validators.required]],
      brandImage : ['',[Validators.required]],
    });
    this.loadAllBrands();  
  }
  loadAllBrands() {  
   alert("welcome");
   this.brandService.getAllBrands().subscribe(data=>{ this.allBrands = data;console.log(data)});
   console.log(this.allBrands);
  }  
  
  onFormSubmit(value : any) {  
    alert("hello");
    this.dataSaved = false;  
    const brand = this.hello.value;  
    this.CreateBrand(brand.brandId, brand );  
    console.log(this.hello.value);
    this.hello.reset();  
  }  
  loadBrandToEdit(brandId: number) {  
    this.brandService.getBrandById(brandId).subscribe(brand=> {  
      alert("hello");
      this.dataSaved = false;  
      this.BrandIdUpdate = brand.brandId; 
      this.hello.controls['brandId'].setValue(brandId);  
      this.hello.controls['brandName'].setValue(brand.brandName);  
      this.hello.controls['brandImage'].setValue(brand.brandImage);    
    });  
  }  
  CreateBrand(BrandId :any,brand: BrandList) {  
     alert("hello");
      this.brandService.createBrand(brand).subscribe(  
        () => {  
          this.dataSaved = true;  
          alert('Record saved Successfully');  
          this.loadAllBrands();
          this.BrandIdUpdate = BrandId; 
          brand.brandId = BrandId;
          this.hello.reset();  
        }
      );  
        
      }
      updateForm(brandId : number , brand : BrandList)
      {
        
        this.brandService.updateBrand(brandId,brand).subscribe(() => {  
        alert("hello");
        console.log(brand,brandId);
        this.dataSaved = true;  
        alert('Record Updated Successfully');  
        this.loadAllBrands(); 
        this.BrandIdUpdate = brandId;  
        this.hello.reset();  
        }
        );
      }

  deleteBrand(BrandId: number) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.brandService.deleteBrandById(BrandId).subscribe(() => {  
      this.dataSaved = true;  
      alert('Record Deleted Succefully');  
      this.loadAllBrands();  
      this.BrandIdUpdate = 0;  
      this.hello.reset();  
    });  
  }  
}  
  resetForm() {  
    this.hello.reset();  
    this.dataSaved = false;  
  }  
}
