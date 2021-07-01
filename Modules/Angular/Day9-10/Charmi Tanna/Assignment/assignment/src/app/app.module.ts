import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentFormBuilderComponent } from './student-form-builder/student-form-builder.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentAdmissionComponent,
    StudentFormBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
