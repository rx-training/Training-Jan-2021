import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandComponent } from './admin/admin-brand/admin-brand.component';
import { AdminCategoryComponent } from './admin/admin-category/admin-category.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminSellerInfoComponent } from './admin/admin-seller-info/admin-seller-info.component';
import { AdminSellerComponent } from './admin/admin-seller/admin-seller.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './Index/Home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './user/cart/cart.component';
import { OrderComponent } from './user/order/order.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : 'Login', component : LoginComponent
  },
  {
    path : 'Admin', component : AdminComponent
  },
  {
    path : 'Admin/Index', component : AdminHomeComponent,
    children :[
      {
        path : 'Product', component : AdminProductComponent
      },
      {
        path : 'Seller', component : AdminSellerComponent
      },
      {
        path : 'Seller/:id', component : AdminSellerInfoComponent
      },
      {
        path : 'Brand', component : AdminBrandComponent
      },
      {
        path : 'Category',component : AdminCategoryComponent
      }
    ]
  },
  {
    path : '', component : HomeComponent, pathMatch : 'full'
  },
  {
    path : 'Home', component : HomeComponent
  },
  {
    path : 'Product/:id', component : ProductComponent
  },
  {
    path : 'Search/:name', component : SearchComponent
  },
  {
    path : 'User', component : UserComponent
  }, 
  {
    path : 'Cart', component : CartComponent
  },
  {
    path : 'Orders', component : OrderComponent
  },
  {
    path : '**', component : PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
