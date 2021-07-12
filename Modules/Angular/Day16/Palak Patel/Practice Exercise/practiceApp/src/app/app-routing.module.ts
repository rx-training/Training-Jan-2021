import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'product', component: ProductComponent,
    children:[
      {path: 'detail/:id', component: ProductDetailComponent,
        children:[
          {path: 'overview', component: ProductOverviewComponent},
          {path: 'spsec', component: ProductSpecComponent},
          {path: '', redirectTo: 'overview', pathMatch:"full"}
        ]
      }
    ]
  },
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: '**', component: ErrorComponent}
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
//export class AppRoutingModule { }
