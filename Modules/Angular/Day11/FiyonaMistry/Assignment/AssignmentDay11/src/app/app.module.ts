import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent,
    DynamicQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
