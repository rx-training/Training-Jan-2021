import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroesModule } from './heroes/heroes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { Router } from '@angular/router';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    // HeroListComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    // HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule,
    BrowserAnimationsModule,
    CrisisCenterModule,
    // AdminModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
