import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesDetailsComponent } from './Heroes/heroes-details/heroes-details.component';
import { HeroListComponent } from './Heroes/hero-list/hero-list.component';
import { CrisisCenterComponent } from './Crisis/crisis-center/crisis-center.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HeroModule} from './Heroes/hero/hero.module';
import { CrisisHomeComponent } from './Crisis/crisis-home/crisis-home.component';
import { CrisisDetailsComponent } from './Crisis/crisis-details/crisis-details.component';
import { CrisisListComponent } from './Crisis/crisis-list/crisis-list.component';
import { CrisisModule } from './Crisis/crisis/crisis.module';
import { ComposeMessageComponent } from './Crisis/compose-message/compose-message.component';




@NgModule({
  declarations: [
    AppComponent,
    HeroesDetailsComponent,
    HeroListComponent,
    CrisisCenterComponent,
    PageNotFoundComponent,
    CrisisHomeComponent,
    CrisisDetailsComponent,
    CrisisListComponent,
    ComposeMessageComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    CrisisModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
