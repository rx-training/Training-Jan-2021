import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { FirstComponent } from './first/first.component';
import { HomeComponent } from './home/home.component';
import { LoggedinguardService } from './loggedinguard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { ProductComponent } from './product/product.component';
import { ProtectedComponent } from './protected/protected.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first', component: FirstComponent,children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      component: ChildBComponent, // another child route component that the router renders
    },
  ] },
  { path: 'second', component: SecondComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, children: [
    { path: 'detail/:id', component: ProductDetailComponent,children : [
      { path: 'overview', component: ProductOverviewComponent },
      { path: 'spec', component: ProductSpecComponent },  
      { path: '', redirectTo:'overview', pathMatch:"full" }
  ] }
  ]},
  { path: 'protected', component: ProtectedComponent,
    canActivate: [LoggedinguardService]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
