import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { Day3PracticeAboutComponent } from './day3-practice-about/day3-practice-about.component';
import { Day3PracticeContactComponent } from './day3-practice-contact/day3-practice-contact.component';
import { Day3PracticeHomeComponent } from './day3-practice-home/day3-practice-home.component';
import { Day3PracticeComponent } from './day3-practice/day3-practice.component';
import { HtmlComponent } from './html/html.component';

const htmlRoutes: Routes = [
  { path: 'html', component: HtmlComponent,children: [
    {
      path: 'day3assignment', // child route path
      component: Day3AssignmentComponent, // child route component that the router renders
    },
    {
      path: 'day3practice',
      component: Day3PracticeComponent, children: [
        {
          path: 'day3practicecontact',
          component: Day3PracticeContactComponent, // another child route component that the router renders
        },
        {
          path: 'day3practiceabout',
          component: Day3PracticeAboutComponent, // another child route component that the router renders
        },
        {
          path: 'day3practicehome',
          component: Day3PracticeHomeComponent, // another child route component that the router renders
        }
      ]
    }
  ]  }

];

@NgModule({
  imports: [RouterModule.forChild(htmlRoutes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
