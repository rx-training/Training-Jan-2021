import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Index/Home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './Index/navbar/navbar.component';
import { CarouselIndexComponent } from './Index/carousel-index/carousel-index.component';
import { Section3Component } from './Index/section3/section3.component';
import { Section4Component } from './Index/section4/section4.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { Section5Component } from './Index/section5/section5.component';
import { Section6Component } from './Index/section6/section6.component';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimilarProductComponent } from './product/similar-product/similar-product.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { OrderComponent } from './user/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    CarouselIndexComponent,
    Section3Component,
    Section4Component,
    FooterComponent,
    Section5Component,
    Section6Component,
    ProductComponent,
    PageNotFoundComponent,
    SimilarProductComponent,
    UserComponent,
    CartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
