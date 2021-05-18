import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormStudentComponent } from './dynamic-form-student/dynamic-form-student.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { StudentDynamicFormComponent } from './student-dynamic-form/student-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormStudentComponent,
    DynamicFormComponent,
    StudentDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
