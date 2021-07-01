import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenageProductComponent } from './menage-product/menage-product.component';
import { ProductsService } from './Services/products.service';
import { RestApiComponent } from './rest-api/rest-api.component';
import { RestAPIService } from './Services/rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    MenageProductComponent,
    RestApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService,RestAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
