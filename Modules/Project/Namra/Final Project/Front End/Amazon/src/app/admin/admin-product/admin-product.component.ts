import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Brand, Category } from 'src/app/Models/BrandCategory';
import { ProductDescription } from 'src/app/Models/ProductDescription';
import { ProductImage } from 'src/app/Models/ProductImage';
import { Product } from 'src/app/Product';
import { BrandCategoryService } from 'src/app/Services/brand-category.service';
import { DemoService } from 'src/app/Services/demo.service';
import { ProductDescriptionService } from 'src/app/Services/product-description.service';
import { ProductImageService } from 'src/app/Services/product-image.service';
import { SearchService } from 'src/app/Services/search.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  productForm = new FormGroup({});

  constructor(private descSer: ProductDescriptionService, private imageService: ProductImageService, private demoService: DemoService, private searchService: SearchService, private fb: FormBuilder, private service: BrandCategoryService) {
    this.form();
    this.formDescription();
    this.service.AllBrands().subscribe(data => {
      this.brands = data;
    });
    this.service.AllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  DescriptionForm = new FormGroup({});

  brandName = '';
  categoryName = '';
  brands: Brand[] = [];
  categories: Category[] = [];
  ProductId = 0;
  form() {
    this.productForm = this.fb.group({
      proName: ['', Validators.compose([Validators.required])],
      proId: [''],
      proPrice: ['', Validators.compose([Validators.required])],
      proOffer: ['', Validators.compose([Validators.required])],
      proBrandId: ['', Validators.compose([Validators.required])],
      proCategoryId: ['', Validators.compose([Validators.required])],
      proImagePath: ['', Validators.compose([Validators.required])],
      proValidity: ['', Validators.compose([Validators.required])],
    });
  }

  formDescription() {
    this.DescriptionForm = this.fb.group({
      fExtraDescription: ['', Validators.compose([Validators.required])],
      fProductDescription: ['', Validators.compose([Validators.required])],
      fRelatedCategory: ['', Validators.compose([Validators.required])]
    });
  }


  get fExtraDescription() {
    return this.DescriptionForm.get('fExtraDescription') as FormControl;
  }
  get fProductDescription() {
    return this.DescriptionForm.get('fProductDescription') as FormControl;
  }
  get fRelatedCategory() {
    return this.DescriptionForm.get('fRelatedCategory') as FormControl;
  }

  get proName() {
    return this.productForm.get('proName') as FormControl;
  }
  get proId() {
    return this.productForm.get('proId') as FormControl;
  }
  get proPrice() {
    return this.productForm.get('proPrice') as FormControl;
  }
  get proOffer() {
    return this.productForm.get('proOffer') as FormControl;
  }
  get proBrandId() {
    return this.productForm.get('proBrandId') as FormControl;
  }
  get proCategoryId() {
    return this.productForm.get('proCategoryId') as FormControl;
  }
  get proImagePath() {
    return this.productForm.get('proImagePath') as FormControl;
  }
  get proValidity() {
    return this.productForm.get('proValidity') as FormControl;
  }

  products: Product[] = [];
  ngOnInit(): void {
    this.Display();
  }
  DeleteId = 0;
  Delete(id: number) {
    this.DeleteId = id;
  }
  IDelete() {
    this.demoService.DeleteProduct(this.DeleteId as number).subscribe(data => {
      if (data == true) {
        alert("Deleted...");
        this.Display();
      }
      else {
        alert("Not deleted...");
      }

      this.DeleteId = 0;
    });
  }
  insertFlag = false;
  prc: Product =
    {
      productId: 0,
      productName: '',
      productPrice: 0,
      produtValidity: 0,
      offer: 0,
      brandId: 0,
      categoryId: 0,
      imgPath: ''
    }
  prcImage: ProductImage = {
    productId: 0,
    imagePath: ''
  }
  prcImages: ProductImage[] = [];
  prcDescription: ProductDescription = {
    productId: 0,
    extraDescription: '',
    relatedCategory: '',
    productDescription1: ''
  }
  clickProduct(l: Product) {
    this.prc = l;
    this.service.BrandById(this.prc.brandId).subscribe(data => {
      this.brandName = data.brandName;
    });
    this.service.CategoryById(this.prc.categoryId).subscribe(data => {
      this.categoryName = data.categoryName;
    });
  }
  clearPath() {
    this.prc.imgPath = '';
  }
  imgPath(str: string) {
    if (str.startsWith('assets')) {
      return true;
    }
    else {
      return false;
    }
  }
  ResetPrc() {
    this.prc = {
      productId: 0,
      productName: '',
      productPrice: 0,
      produtValidity: 0,
      offer: 0,
      brandId: 0,
      categoryId: 0,
      imgPath: ''
    }
    this.brandName = '';
    this.categoryName = '';
  }
  productSearch: string = '';
  Display() {
    if (this.productSearch == '') {
      this.searchService.SearchByProduct("All").subscribe(data => {
        this.products = data;
      });
    }
    else {
      this.searchService.SearchByProduct(this.productSearch).subscribe(data => {
        this.products = data;
      });
    }
  }
  update() {
    this.service.BrandByName(this.brandName).subscribe(data => {
      this.prc.brandId = data.brandId as number;
      this.service.CategoryByName(this.categoryName).subscribe(dat => {
        this.prc.categoryId = dat.categoryId as number;
        this.demoService.UpdateProduct(this.prc).subscribe(data => {
          if (data == true) {
            alert("Product is updated successfully...");
          }
          else {
            alert("Product is not updated...");
          }
          this.ResetPrc();
          this.Display();
        });
      });
    });
  }
  Images(id: number) {
    this.imageService.GetProductImages(id).subscribe(data => {
      this.prcImages = data;
    });
    this.ProductId = id;
  }
  AddImagePath = '';
  Description(id: number) {
    this.descSer.GetDescriptionById(id).subscribe(data => {
      this.prcDescription = data;
      this.ProductId = data.productId;
    });
  }
  AddImage() {
    if (this.AddImagePath == '') {
      alert("Please enter a valid path...");
    }
    else {
      this.prcImage.productId = this.ProductId;
      this.prcImage.imagePath = this.AddImagePath;
      this.imageService.CreateImage(this.prcImage).subscribe(data => {
        if (data == false) {
          alert("Image is not added...");
        }
        this.imageService.GetProductImages(this.ProductId).subscribe(dt => {
          this.prcImages = dt;
        });
      });
      this.AddImagePath = '';
    }
  }
  deleteImage(id: number | undefined) {
    this.imageService.DeleteImage(id as number).subscribe(data => {
      if (data == false) {
        alert("Product image is not deleted...");
      }
      this.imageService.GetProductImages(this.ProductId).subscribe(dt => {
        this.prcImages = dt;
      });
    });
  }


  brand: Brand = {
    brandId: 0,
    brandName: ''
  }
  category: Category = {
    categoryId: 0,
    categoryName: ''
  }
  InsertProduct() {
    this.service.BrandByName(this.brandName).subscribe(data => {
      this.prc.brandId = data.brandId as number;
      this.service.CategoryByName(this.categoryName).subscribe(dat => {
        this.prc.categoryId = dat.categoryId as number;
        this.demoService.CreateProduct(this.prc).subscribe(dt => {
          if (dt == 0) {
            alert("Product is not added");
          }
          else {
            alert("Product is added and product id is : " + dt);
            this.ResetPrc();
            this.Display();
          }
        });
      });
    });

  }
  descriptionFlag = false;

  description(Id: number) {
    this.descSer.AnyDescription(Id).subscribe(data => {
      if (data == true) {
        this.descriptionFlag = true;
        this.descSer.GetDescriptionById(Id).subscribe(dt => {
          this.prcDescription = dt;
          console.log(this.prcDescription);
        });
      }
      else {
        this.descriptionFlag = false;
        this.prcDescription.productId = Id;
      }
    });
  }
  ResetDescription() {
    this.prcDescription = {
      productId: 0,
      extraDescription: '',
      relatedCategory: '',
      productDescription1: ''
    }
    this.prcDescription.productDescriptionId = undefined;
    this.prcDescription.descriptionDate = undefined;
  }
  CreateDescription() {
    this.descSer.CreateDescription(this.prcDescription).subscribe(data => {
      if (data == false) {
        alert("Something went wrong...");
      }
      else {
        alert("Added...")
      }
    })
    this.ResetDescription();
  }
  UpdateDescription() {
    this.descSer.UpdateDescription(this.prcDescription).subscribe(data => {
      if (data == true) {
        alert("Updated successfully...");
      }
      else {
        alert("Not updated...");
      }
    });
    this.ResetDescription();
  }
}
