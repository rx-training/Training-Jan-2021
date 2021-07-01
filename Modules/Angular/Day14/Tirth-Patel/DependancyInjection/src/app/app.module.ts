import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './heroes/heroes.component';
import { AppComponent } from './app.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { CalcserviceService } from './calcservice.service';
import { CalcComponent } from './calc/calc.component';
import { LoggerserviceService } from './loggerservice.service';
import { ListDemoService } from './list-demo.service';
import { Logger } from './logger.service';
import { UserService } from './user.service';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { ValueDataService,API_URL } from './value-data.service';
import { ValuedataComponent } from './valuedata/valuedata.component';
import { InjectorComponent } from './injector.component';
import { APP_CONFIG, HERO_DI_CONFIG } from './app.config';
import { StudentComponent } from './Assignment/student/student.component';
import { StudentListComponent } from './Assignment/student-list/student-list.component';
import { StudentServiceService } from './Assignment/StudentService';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CalcComponent, Component1Component, Component2Component, ValuedataComponent
  ,HeroesComponent,InjectorComponent,HeroListComponent, StudentComponent, StudentListComponent
  
  ],
  bootstrap:    [ AppComponent ],
  providers: [CalcserviceService, LoggerserviceService,Logger,{ provide: ValueDataService,useClass:ValueDataService },
    {
      provide: API_URL,
      useValue: 'http://google.com' 
    },
    { provide: APP_CONFIG, useValue:HERO_DI_CONFIG }]
})
export class AppModule { }
