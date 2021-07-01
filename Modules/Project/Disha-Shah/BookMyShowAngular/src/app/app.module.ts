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
import { MovieBookingsService } from './movies/movie-bookings.service';
import { EventsService } from './events/events.service';
import { FilmCategoryService } from './movies/film-category.service';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterService } from './auth/register.service';
import { UserBookingHistoryComponent } from './user-booking-history/user-booking-history.component';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventModule } from './events/event/event.module';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminModule } from './admin/admin.module';
import {DatePipe} from '@angular/common';

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
    SearchComponent,
    RegisterComponent,
    LoginComponent,
    UserBookingHistoryComponent,
    EventDetailComponent,
    AdminDashboardComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    EventModule,
    AdminModule
  ],
  providers: [DatePipe, MoviesService, GenreService, LanguageService, MovieBookingsService, EventsService, FilmCategoryService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
