import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { ReactiveNestedformsComponent } from './reactive-nestedforms/reactive-nestedforms.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ValidatorsComponent } from './validators/validators.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveformsComponent,
    ReactiveNestedformsComponent,
    FormbuilderComponent,
    ValidatorsComponent,
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
