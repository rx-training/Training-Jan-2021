import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTMLRoutingModule } from './html-routing.module';
import { HTMLComponent } from '../html/html.component';
import { ArticaltegComponent } from './Day3/Practice/articalteg/articalteg.component';
import { HrDepartmentComponent } from './Day3/Practice/hr-department/hr-department.component';
import { NavbarComponent } from './Day3/Practice/navbar/navbar.component';
import { StudentreportcardComponent } from './Day3/Practice/studentreportcard/studentreportcard.component';
import { AssignmentComponent } from './Day3/Assignment/assignment/assignment.component';
import { BorderwithperegraphComponent } from './Day4/Practice/borderwithperegraph/borderwithperegraph.component';
import { DisplayPropertiesComponent } from './Day4/Practice/display-properties/display-properties.component';
import { UniversalPropertiesComponent } from './Day4/Practice/universal-properties/universal-properties.component';
import { UseofcssComponent } from './Day4/Practice/useofcss/useofcss.component';
import { AssignmentDay4Component } from './Day4/Assignment/assignment-day4/assignment-day4.component';
import { HTMLHOMEComponent } from './html-home/html-home.component';



@NgModule({
  declarations: [
    HTMLComponent,
    ArticaltegComponent,
    HrDepartmentComponent,
    NavbarComponent,
    StudentreportcardComponent,
    AssignmentComponent,
    BorderwithperegraphComponent,
    DisplayPropertiesComponent,
    UniversalPropertiesComponent,
    UseofcssComponent,
    AssignmentDay4Component,
    HTMLHOMEComponent,
   
  ],
  imports: [
    CommonModule,
    HTMLRoutingModule
  ]
})
export class HTMLModule { }
