import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RidersModule } from './riders/riders.module';
import { AdminModule } from './admin/admin.module';
import { DriversModule } from './drivers/drivers.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RidersModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    DriversModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
