import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SingleServerComponent } from './single-server/single-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerService } from './server.service';
import { LoggedinguardService } from './loggedinguard.service';
import { AuthService } from './auth.service';
import { CanDeactivateGuard } from './edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    UserComponent,
    SingleUserComponent,
    EditServerComponent,
    SingleServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServerService, LoggedinguardService, AuthService, CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
