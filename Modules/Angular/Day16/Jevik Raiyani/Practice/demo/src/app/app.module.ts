import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductDetailComponentComponent } from './product-detail-component/product-detail-component.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ProductOverviewComponent } from './product-overview.component';
import { ProductSpecComponent } from './product-spec.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ProductDetailComponentComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
    ProductOverviewComponent,
    ProductSpecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
