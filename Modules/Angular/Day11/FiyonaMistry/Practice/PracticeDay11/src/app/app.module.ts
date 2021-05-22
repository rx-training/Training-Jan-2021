import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicQuestionComponent } from './dynamic-question.component';
import { DynamicFormComponent } from './dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicQuestionComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
