import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';
import { DynamicFormQuestionComponentComponent } from './dynamic-form-question-component/dynamic-form-question-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DynamicFormComponentComponent,
    DynamicFormQuestionComponentComponent
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
