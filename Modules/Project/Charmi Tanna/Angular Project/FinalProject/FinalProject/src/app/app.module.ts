import { AllPaymentModule } from './all-payment/all-payment.module';
import { SaleModule } from './sale/sale.module';
import { AllOrderModule } from './all-order/all-order.module';
import { Kids999Module } from './kids999/kids999.module';
import { AllCustomerModule } from './all-customer/all-customer.module';
import { PaymentsModule } from './payments/payments.module';
import { Mens999Module } from './mens999/mens999.module';
import { Womens999Module } from './womens999/womens999.module';
import { OrdersModule } from './orders/orders.module';
import { BrandModule } from './brand/brand.module';
import { CustomerModule } from './customer/customer.module';
import { CustomerComponent } from './customer/customer.component';
import { WomenModule } from './women/women.module';
import { AddProductsModule } from './add-products/add-products.module';
import { DiscountModule } from './discount/discount.module';
import { AddSubCategoriesModule } from './add-sub-categories/add-sub-categories.module';
import { AddBrandsModule } from './add-brands/add-brands.module';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './home/home.component';
import { KidsModule } from './kids/kids.module';
import { CommonModule } from '@angular/common';
import { MenModule } from './men/men.module';
import { SignUpService } from './sign-up.service';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminComponent } from './admin/admin.component';
import { AddBrandComponent } from './add-brand/add-brand.component';
import { AddProductComponent } from './add-product/add-product.component';
import { WomenComponent } from './women/women.component';
import { CartModule } from './cart/cart.module';
import {CartsComponent} from './carts/carts.component';
import { OrderComponent } from './order/order.component';
import { from } from 'rxjs';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { Women999Component } from './women999/women999.component';
import { Men999Component } from './men999/men999.component';
import { IndividualComponentComponent } from './individual-component/individual-component.component';
import { Kids999Component } from './kids999/kids999.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { SalesComponent } from './sales/sales.component';
import { AllPaymentsComponent } from './all-payments/all-payments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomerComponent,
    AddBrandComponent,
    AddProductComponent,
    OrderDetailsComponent,
    IndividualComponentComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule,
    AllPaymentModule,
    AddSubCategoriesModule,
    AddBrandsModule,
    AllCustomerModule,
    AllOrderModule,
    AddProductsModule,
    SaleModule,
    Kids999Module,
    CartModule,
    OrdersModule,
    BrandModule,
    DiscountModule,
    PaymentsModule,
    MenModule,
    KidsModule,
    OrdersModule,
    Womens999Module,
    PaymentsModule,
    WomenModule,
    AdminModule,
    CustomerModule,
    Mens999Module,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
