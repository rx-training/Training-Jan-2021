import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    ProductOverviewComponent,
    ProductSpecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
