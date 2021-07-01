import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { StudentComponent } from './student/student.component';
import { FacultComponent } from './facult/facult.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { FeesComponent } from './fees/fees.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    StudentComponent,
    FacultComponent,
    StudentdetailComponent,
    FeesComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
