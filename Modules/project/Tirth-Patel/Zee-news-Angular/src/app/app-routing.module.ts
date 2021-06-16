import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './Admins/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './Admins/admin-login/admin-login.component';
import { AppComponent } from './app.component';
import { BreakingNewasComponent } from './breaking-newas/breaking-newas.component';
import { Budegt2021Component } from './budegt2021/budegt2021.component';
import { HomeComponent } from './home/home.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { Subnews1Component } from './live-news/subnews1/subnews1.component';
import { Subnews2Component } from './live-news/subnews2/subnews2.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  {path:'main',component:MainComponent},

{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'Home',component:HomeComponent},

{path:'breaking',component:BreakingNewasComponent},
{path:'budget',component:Budegt2021Component},
{
  path:'admin',loadChildren:()=>import('./Admins/admin.module').then(m=>m.AdminModule),
  data:{preload:true}
},
// {
//   path:'Home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule),
//   data:{preload:true}
// },
{path:'Home',component:AdminLoginComponent},
{path:'Home/:type/:id',component:Subnews2Component         },

{path:'Subnews_1',component:Subnews1Component},
{path:'',component:MainComponent},
{path:'**',component:PageNotFoundComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
