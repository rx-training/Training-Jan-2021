import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { FormbuilderPracticeComponent } from './formbuilder-practice/formbuilder-practice.component';
import { HeroValidatorComponent } from './hero-validator/hero-validator.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    NameEditorComponent,
    FormbuilderPracticeComponent,
    HeroValidatorComponent
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
