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
import { PopularsComponent } from './events/populars/populars.component';
import { PlaysComponent } from './events/plays/plays.component';
import { SportsComponent } from './events/sports/sports.component';
import { ActivitiesComponent } from './events/activities/activities.component';
import { UserFooterComponent } from './user-footer/user-footer.component';
import { UserTopSliderComponent } from './user-top-slider/user-top-slider.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeAllMoviesEventsComponent } from './home-all-movies-events/home-all-movies-events.component';
import { AllMoviesComponent } from './movies/all-movies/all-movies.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { AllPlaysComponent } from './events/all-plays/all-plays.component';
import { AllSportsComponent } from './events/all-sports/all-sports.component';
import { AllActivitiesComponent } from './events/all-activities/all-activities.component';
import { MovieComponent } from './movies/movie/movie/movie.component';
import { SelectShowTimeComponent } from './movies/movie/select-show-time/select-show-time.component';
import { SelectDateComponent } from './movies/movie/select-date/select-date.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SeatingComponent } from './movies/movie/seating/seating.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserNavbarComponent,
    RecommendedMoviesComponent,
    PremiereMoviesComponent,
    OutdoorComponent,
    ComediesComponent,
    PopularsComponent,
    PlaysComponent,
    SportsComponent,
    ActivitiesComponent,
    UserFooterComponent,
    UserTopSliderComponent,
    PageNotFoundComponent,
    HomeAllMoviesEventsComponent,
    AllMoviesComponent,
    AllEventsComponent,
    AllPlaysComponent,
    AllSportsComponent,
    AllActivitiesComponent,
    MovieComponent,
    SelectShowTimeComponent,
    SelectDateComponent,
    SeatingComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService, GenreService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
