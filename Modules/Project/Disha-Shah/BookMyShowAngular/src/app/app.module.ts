import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { RecommendedMoviesComponent } from './movies/recommended-movies/recommended-movies.component';
import {HttpClientModule} from '@angular/common/http';
import {MoviesService} from './movies/movies.service';
import { PremiereMoviesComponent } from './movies/premiere-movies/premiere-movies.component';
import { GenreService } from './movies/genre.service';
import { LanguageService } from './language.service';
import { OutdoorComponent } from './events/outdoor/outdoor.component';
import { ComediesComponent } from './events/comedies/comedies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserNavbarComponent,
    RecommendedMoviesComponent,
    PremiereMoviesComponent,
    OutdoorComponent,
    ComediesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService, GenreService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
