import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductSpecComponent } from './product-spec.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponentComponent,
    children:[
      {path:'detail/:id',component:ProductDetailComponentComponent,
        children : [
          { path: 'overview', component: ProductOverviewComponent },
          { path: 'spec', component: ProductSpecComponent },  
          { path: '', redirectTo:'overview', pathMatch:"full" }
    ]}
  ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
