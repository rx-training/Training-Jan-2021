import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CssComponent } from './css/css.component';
import { Day15AssignmentComponent } from './day15-assignment/day15-assignment.component';
import { Day15Practice1Component } from './day15-practice1/day15-practice1.component';
import { Day15Practice2Component } from './day15-practice2/day15-practice2.component';
import { Day15Practice3Component } from './day15-practice3/day15-practice3.component';
import { Day16ArrayComponent } from './day16-array/day16-array.component';
import { Day16AssignmentComponent } from './day16-assignment/day16-assignment.component';
import { Day16DateComponent } from './day16-date/day16-date.component';
import { Day16PracticeComponent } from './day16-practice/day16-practice.component';
import { Day16StringComponent } from './day16-string/day16-string.component';
import { Day17AssignmentComponent } from './day17-assignment/day17-assignment.component';
import { Day17Practice1Component } from './day17-practice1/day17-practice1.component';
import { Day17Practice2Component } from './day17-practice2/day17-practice2.component';
import { Day18AssignmentComponent } from './day18-assignment/day18-assignment.component';
import { Day18Practice1Component } from './day18-practice1/day18-practice1.component';
import { Day18Practice2Component } from './day18-practice2/day18-practice2.component';
import { Day18Practice3Component } from './day18-practice3/day18-practice3.component';
import { Day19Practice1Component } from './day19-practice1/day19-practice1.component';
import { Day19Practice2Component } from './day19-practice2/day19-practice2.component';
import { Day20AssignmentComponent } from './day20-assignment/day20-assignment.component';
import { Day20PracticeComponent } from './day20-practice/day20-practice.component';
import { Day3AssignmentComponent } from './day3-assignment/day3-assignment.component';
import { Day3PracticeAboutComponent } from './day3-practice-about/day3-practice-about.component';
import { Day3PracticeContactComponent } from './day3-practice-contact/day3-practice-contact.component';
import { Day3PracticeHomeComponent } from './day3-practice-home/day3-practice-home.component';
import { Day3PracticeComponent } from './day3-practice/day3-practice.component';
import { Day4PracticeComponent } from './day4-practice/day4-practice.component';
import { Day5PracticeComponent } from './day5-practice/day5-practice.component';
import { Day5Practice2Component } from './day5-practice2/day5-practice2.component';
import { Day6AssignmentComponent } from './day6-assignment/day6-assignment.component';
import { Day6Practice1Component } from './day6-practice1/day6-practice1.component';
import { Day6Practice2Component } from './day6-practice2/day6-practice2.component';
import { Day7PracticeComponent } from './day7-practice/day7-practice.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'html', component: HtmlComponent },
  { path: 'day3assignment', component: Day3AssignmentComponent},
  { path: 'day3practice', component: Day3PracticeComponent},
  { path: 'day3practicecontact', component: Day3PracticeContactComponent},
  { path: 'day3practiceabout', component: Day3PracticeAboutComponent},
  { path: 'day3practicehome', component: Day3PracticeHomeComponent},
  { path: 'day4practice', component: Day4PracticeComponent},
  { path: 'day5practice', component: Day5PracticeComponent},
  { path: 'day5practice2', component: Day5Practice2Component},
  { path: 'day6practice1', component: Day6Practice1Component},
  { path: 'day6practice2', component: Day6Practice2Component},
  { path: 'day6assignment', component: Day6AssignmentComponent},
  { path: 'day7practice', component: Day7PracticeComponent},
  { path: 'day15practice1', component: Day15Practice1Component},
  { path: 'day15practice2', component: Day15Practice2Component},
  { path: 'day15practice3', component: Day15Practice3Component},
  { path: 'day15assignment', component: Day15AssignmentComponent},
  { path: 'day16array', component: Day16ArrayComponent},
  { path: 'day16date', component: Day16DateComponent},
  { path: 'day16string', component: Day16StringComponent},
  { path: 'day16practice', component: Day16PracticeComponent},
  { path: 'day16assignment', component: Day16AssignmentComponent},
  { path: 'day17practice1', component: Day17Practice1Component},
  { path: 'day17practice2', component: Day17Practice2Component},
  { path: 'day17assignment', component: Day17AssignmentComponent},
  { path: 'day18practice1', component: Day18Practice1Component},
  { path: 'day18practice2', component: Day18Practice2Component},
  { path: 'day18practice3', component: Day18Practice3Component},
  { path: 'day18assignment', component: Day18AssignmentComponent},
  { path: 'day19practice1', component: Day19Practice1Component},
  { path: 'day19practice2', component: Day19Practice2Component},
  { path: 'day20practice', component: Day20PracticeComponent},
  { path: 'day20assignment', component: Day20AssignmentComponent},
  { path: 'css', component: CssComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
