import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserDetailOfSeatComponent } from './book-seat/user-detail-of-seat/user-detail-of-seat.component';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    BookNowComponent,
    BookSeatComponent,
    UserDetailOfSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
