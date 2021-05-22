import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AdmissionFormComponent } from './admission-form/admission-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
