import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDescription } from 'src/app/Models/ProductDescription';
import { Product } from 'src/app/Product';
import { ProductDescriptionService } from 'src/app/Services/product-description.service';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.css']
})
export class SimilarProductComponent implements OnInit {

  @Input() related : any;
  @Input() product : ProductDescription = {productId : 0, productDescription1 : '', productDescriptionId : 0, extraDescription : '', relatedCategory :''};
  products : Product[] = [];
  constructor(private descriptionService : ProductDescriptionService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
  
  }
  ngOnChanges(changes:SimpleChanges) {
    console.log( changes );
    console.log(this.related);
    this.descriptionService.GetProductByRelatedCategory(this.related).subscribe(data=>{
      this.products = data;
    });
  }
  productClick(Id : number)
  {
    this.router.navigate(['../../Product',Id],{relativeTo : this.route});
  }
  imgPath(str : string)
  {
    if(str.startsWith('assets'))
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
