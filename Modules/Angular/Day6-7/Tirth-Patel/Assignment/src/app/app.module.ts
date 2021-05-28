import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RectangleComponent } from './rectangle/rectangle.component';
import { LoginComponent } from './login/login.component';
import { CircleComponent } from './circle/circle.component';
import { SignupComponent } from './signup/signup.component';
import { LeftbarComponent } from './leftbar/leftbat.component'

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    LoginComponent,
    CircleComponent,
    SignupComponent,
    LeftbarComponent
  ],
  imports: [
    FormsModule,
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
