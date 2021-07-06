import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DynamicFormQuestionComponen } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponentComponent } from './dynamic-form-component/dynamic-form-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormQuestionComponen,
    DynamicFormComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
