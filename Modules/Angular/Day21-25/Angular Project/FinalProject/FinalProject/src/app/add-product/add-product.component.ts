import { ProductsService } from './../products.service';
import {ProductList} from './../ProductList';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  dataSaved = false;
  ProductForm : FormGroup;
  allProducts: any;
  productIdUpdate : any;

  constructor(private formbuilder: FormBuilder, private productService: ProductsService)
  {
    this.ProductForm = this.formbuilder.group({
      productCode : ['',[Validators.required]],
      productPrice : ['',[Validators.required]],
      productDescription : ['',[Validators.required]],
      productImage : ['',[Validators.required]],
      subCategoryId : ['',[Validators.required]],
      brandId : ['',[Validators.required]],
      discount : ['',[Validators.required]],
      quantity : ['',[Validators.required]],
    });
  }

  ngOnInit() {
    this.loadAllProducts();  
  } 

  loadAllProducts() {  
    this.productService.getAllProducts().subscribe(data=>{ this.allProducts = data;console.log(data)});
   }  

   onFormSubmit(value : any) {  
    alert("hello");
    this.dataSaved = false;  
    const product = this.ProductForm.value;  
    this.CreateProduct(product.productcode, product );  
    console.log(this.ProductForm.value);
    this.ProductForm.reset();  
  }  

   CreateProduct(productCode :any,product : ProductList) {  
    alert("hello");
    console.log(product);
     this.productService.createProduct(product).subscribe(  
       () => {  
         this.dataSaved = true;  
         alert('Record saved Successfully');  
         this.loadAllProducts();
         this.productIdUpdate = productCode; 
         product.productCode = productCode;
         this.ProductForm.reset();  
       }
     );  
       
     }

  //  onFormSubmit(value : any) {  
  //   alert("hello");
  //   this.dataSaved = false;  
  //   const product = this.ProductForm.value;  
  //   console.log(this.ProductForm.value);
  //   console.log("Product Code"+product.productCode);
  //   console.log("Product"+product);
  //   this.CreateProduct(product.productCode, product );  
  //   console.log(this.ProductForm.value);
  //   this.ProductForm.reset();  
  // }  
  loadProductToEdit(productCode: string) {  
    this.productService.getProductById(productCode).subscribe(product=> {  
      alert("hello");
      this.dataSaved = false;  
      this.productIdUpdate = product.productCode; 
      this.ProductForm.controls['productCode'].setValue(productCode);  
      this.ProductForm.controls['productPrice'].setValue(product.productPrice);  
      this.ProductForm.controls['productImage'].setValue(product.productImage);  
      this.ProductForm.controls['productDescription'].setValue(product.productDescription);  
      this.ProductForm.controls['subCategoryId'].setValue(product.subCategoryId); 
      this.ProductForm.controls['brandId'].setValue(product.brandId);  
      this.ProductForm.controls['discount'].setValue(product.discount);   
      this.ProductForm.controls['quantity'].setValue(product.quantity);  
    });  
  }  
  // CreateProduct(productCode :any , product: ProductList) {  
  //    alert("hello");
  //    this.productService.createProduct(product).subscribe(
  //     () =>{
  //       alert("welcome");
  //      }
  //    );
  //     }
      
      // this.productService.createProduct(product).subscribe(  
      //   () => {  
      //     alert("welcome");
      //     this.dataSaved = true;  
      //     alert('Record saved Successfully');  
      //     this.loadAllProducts();
      //     this.productIdUpdate = productCode; 
      //     product.productcode = productCode;
      //     this.ProductForm.reset();  
      //   }
      // );  
        
      updateForm(productCode : string , product : ProductList)
      {
        
        this.productService.updateProduct(productCode,product).subscribe(() => {  
        alert("hello");
        console.log(product,productCode);
        this.dataSaved = true;  
        alert('Record Updated Successfully');  
        this.loadAllProducts(); 
        this.productIdUpdate = productCode;  
        this.ProductForm.reset();  
        }
        );
      }

  deleteProduct(productCode: string) {  
    if (confirm("Are you sure you want to delete this ?")) {   
    this.productService.deleteProductById(productCode).subscribe(() => {  
      this.dataSaved = true;  
      alert('Record Deleted Succefully');  
      this.loadAllProducts();  
      this.productIdUpdate = 0;  
      this.ProductForm.reset();  
    });  
  }  
}  
  resetForm() {  
    this.ProductForm.reset();  
    this.dataSaved = false;  
  }  
}
