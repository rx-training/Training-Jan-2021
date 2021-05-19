import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputOutputPracticeComponent } from './input-output-practice/input-output-practice.component';
import { EventEmitterPracticeComponent } from './event-emitter-practice/event-emitter-practice.component';
import { StockStatusComponent } from './stock-status/stock-status.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { ViewChildComponent } from './view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputPracticeComponent,
    EventEmitterPracticeComponent,
    StockStatusComponent,
    UserListComponent,
    UserComponent,
    ViewChildComponent
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
