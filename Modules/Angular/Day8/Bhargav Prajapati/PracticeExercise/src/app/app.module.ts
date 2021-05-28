import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifDirectiveComponent } from './ngif-directive/ngif-directive.component';
import { from } from 'rxjs';
import { NgforDirectiveComponent } from './ngfor-directive/ngfor-directive.component';
import { NgswitchDirectiveComponent } from './ngswitch-directive/ngswitch-directive.component';
import { ClassDirectiveComponent } from './class-directive/class-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifDirectiveComponent,
    NgforDirectiveComponent,
    NgswitchDirectiveComponent,
    ClassDirectiveComponent
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
