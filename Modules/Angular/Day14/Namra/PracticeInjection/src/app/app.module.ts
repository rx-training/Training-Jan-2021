import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { API_URL, StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    { provide : StudentComponent, useClass : StudentComponent},
    {provide : API_URL, useValue : 'https://api/getStudent'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
