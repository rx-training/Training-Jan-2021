import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RectengleComponent } from './rectengle/rectengle.component';
import { LoginComponent } from './login/login.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    RectengleComponent,
    LoginComponent,
    LeftSidebarComponent,
    SingUpComponent,
    CircleComponent
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
