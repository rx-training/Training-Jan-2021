import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { HeroesModule } from './heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisCenterRoutingModule } from './crisis-center/crisis-center-routing.module';
// const appRoutes: Routes = [
//   { path: 'crisis-center', component: CrisisListComponent },
//   { path: 'heroes', component: HeroListComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];


@NgModule({
  declarations: [
    AppComponent,
   
  PageNotFoundComponent 
    // HomeComponent,
    // ServersComponent,
    // UsersComponent,
    // UserComponent,
    // EditServerComponent,
    // ServerComponent
   
  ],
  imports: [
    BrowserModule,
   FormsModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    // CrisisCenterModule,
     
  
     // <-- debugging purposes only
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
