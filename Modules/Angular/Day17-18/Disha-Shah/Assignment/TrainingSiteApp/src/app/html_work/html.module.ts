import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlComponent } from './html/html.component';
import { Day3PracticeAboutComponent } from './day3-practice-about/day3-practice-about.component';
import { Day3PracticeContactComponent } from './day3-practice-contact/day3-practice-contact.component';
import { Day3PracticeHomeComponent } from './day3-practice-home/day3-practice-home.component';
import { Day3PracticeComponent } from './day3-practice/day3-practice.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';

import { HtmlRoutingModule } from './html-routing.module';

@NgModule({
  declarations: [
    HtmlComponent,
    Day3PracticeAboutComponent,
    Day3PracticeContactComponent,
    Day3PracticeHomeComponent,
    Day3PracticeComponent,
    Day3AssignmentComponent
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
