import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginsingupsModule } from './login-singup/loginsingups.module';
import { UserModule } from './users/user.module';
import { AdminPenalComponent } from './admin-penal/admin-penal.component';
import { AdminModule } from './admin-penal/admin.module';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AdminPenalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    LoginsingupsModule,
    UserModule,
    HttpClientModule,
    ReactiveFormsModule ,
    AdminModule,
    NgbModule,
    AppRoutingModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
