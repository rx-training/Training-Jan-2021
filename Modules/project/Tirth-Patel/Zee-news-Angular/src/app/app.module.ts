import { NgModule } from '@angular/core';
import {FormBuilder,FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BreakingNewasComponent } from './breaking-newas/breaking-newas.component';
import { LiveNewsComponent } from './live-news/live-news.component';
import { Budegt2021Component } from './budegt2021/budegt2021.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { RouterModule } from '@angular/router';
import { Subnews1Component } from './live-news/subnews1/subnews1.component';
import { Subnews2Component } from './live-news/subnews2/subnews2.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
   PageNotFoundComponent,
   HomeComponent,
   BreakingNewasComponent,
   LiveNewsComponent,
   Budegt2021Component,
   NavigationComponent,
   FooterComponent,
   AdvertisementComponent,
AppComponent,
Subnews1Component,
Subnews2Component,
  LoginComponent,
  SignupComponent,
  MainComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
   
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,


  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
