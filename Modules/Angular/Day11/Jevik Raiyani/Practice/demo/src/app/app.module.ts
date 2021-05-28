import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormQuestionComponentComponent } from './dynamic-form-question-component.component';
import { DynamicFormComponentComponent } from './dynamic-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponentComponent,
    DynamicFormComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
