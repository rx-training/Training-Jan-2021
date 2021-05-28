import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService } from './lib/student.service';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
