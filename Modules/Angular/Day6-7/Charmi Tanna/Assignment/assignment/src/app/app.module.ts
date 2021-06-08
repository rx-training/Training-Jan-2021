import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaOfRectangleComponent } from './area-of-rectangle/area-of-rectangle.component';
import { AreaOfCircleComponent } from './area-of-circle/area-of-circle.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LeftBarComponent } from './left-bar/left-bar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaOfRectangleComponent,
    AreaOfCircleComponent,
    SignUpComponent,
    LeftBarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
