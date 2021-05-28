import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { LoginComponent } from './login/login.component';
import { CircleComponent } from './circle/circle.component';
import { SignupComponent } from './signup/signup.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    LoginComponent,
    CircleComponent,
    SignupComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, RectangleComponent, LoginComponent, CircleComponent, SignupComponent, SideBarComponent]
})
export class AppModule { }
