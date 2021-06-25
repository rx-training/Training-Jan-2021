import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule, CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreInfoComponent } from './HeaderFooter/more-info/more-info.component';
import { PartnerSitesComponent } from './HeaderFooter/partner-sites/partner-sites.component';
import { RightsReservedComponent } from './HeaderFooter/rights-reserved/rights-reserved.component';
import { HomePageModule } from './HomePage/home-page.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobSeekerService } from './shared/Services/job-seeker.service';
import { RegisterNowModule } from './RegisterNow/register-now.module';
import { LoginComponent } from './login/login.component';
import { GuestGuard } from './shared/Guard/guest.guard';
import { LoggedInGuard } from './shared/Guard/logged-in.guard';
import { RegistrationService } from './shared/Services/registration.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SearchJobResultsModule } from './SearchJobResults/search-job-results.module';
import { ApplyConfirmationComponent } from './SearchJobResults/apply-confirmation/apply-confirmation.component';
import { LoginHomePageModule } from './LoginHomePage/login-home-page.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MoreInfoComponent,
    PartnerSitesComponent,
    RightsReservedComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ApplyConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    CarouselModule,
    WavesModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    HomePageModule,
    SearchJobResultsModule,
    AppRoutingModule,
    RegisterNowModule,
    BrowserAnimationsModule,
    LoginHomePageModule,
  ],
  providers: [JobSeekerService, GuestGuard, LoggedInGuard, RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
