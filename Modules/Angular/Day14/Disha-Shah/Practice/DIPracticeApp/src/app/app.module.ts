import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ProviderComponent } from './provider/provider.component';
import {
  Provider1Component,
  Provider3Component,
  Provider4Component,
  Provider5Component,
  Provider6aComponent,
  Provider6bComponent,
  Provider7Component,
  Provider8Component,
  Provider9Component,
  Provider10Component
} from './provider/provider.component';
import { ValueDataComponent } from './value-data/value-data.component';
import { API_URL, ValueDataService } from './value-data.service';
import { CalcComponent } from './calc/calc.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentListComponent,
    HeroListComponent,
    HeroesComponent,
    ProviderComponent,
    Provider1Component,
    Provider3Component,
    Provider4Component,
    Provider5Component,
    Provider6aComponent,
    Provider6bComponent,
    Provider7Component,
    Provider8Component,
    Provider9Component,
    Provider10Component,
    ValueDataComponent,
    CalcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService, { provide: ValueDataService, useClass: ValueDataService },
    {
      provide: API_URL,
      useValue: 'http://google.com' 
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

