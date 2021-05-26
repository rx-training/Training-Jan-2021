import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  // {path:'crisis-center',component:CrisisListComponent},
  // {path:'Heroes', component:HeroListComponent},
  // {path:'',redirectTo:'/Heroes',pathMatch:'full'},
  // {path:'**',component:PageNotFoundComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path : 'contectus',component:ContectUsComponent},
  {path : 'about',component:AboutUsComponent},
  {path: 'product',component:ProductComponent},
  {path:'**',component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
