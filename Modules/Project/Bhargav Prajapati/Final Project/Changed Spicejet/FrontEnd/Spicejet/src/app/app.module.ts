import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingModuleComponent } from './booking-module/booking-module.component';
import {BookingModuleModule} from './booking-module/booking-module.module';
import { AdminModuleModule } from './admin-module/admin-module.module';
import { SliderComponent } from './slider/slider.component';
import { SpiceINfoComponent } from './spice-info/spice-info.component';
import { SpiceContectComponent } from './spice-contect/spice-contect.component';
import { SpicejetFooterComponent } from './spicejet-footer/spicejet-footer.component';
import { CovidInfoComponent } from './covid-info/covid-info.component';
import { SigninComponent } from './Authentication/signin/signin.component';
import { LogInComponent } from './Authentication/log-in/log-in.component';
import { UnAuthoRizedComponent } from './un-autho-rized/un-autho-rized.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingModuleComponent,
    SliderComponent,
    SpiceINfoComponent,
    SpiceContectComponent,
    SpicejetFooterComponent,
    CovidInfoComponent,
    SigninComponent,
    LogInComponent,
    UnAuthoRizedComponent,
 
      ],
  imports: [
    BrowserModule,
    BookingModuleModule,
    AdminModuleModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
