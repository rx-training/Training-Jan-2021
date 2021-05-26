import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { D4a1Component } from './css-work/day4/d4a1/d4a1.component';
import { D4p1Component } from './css-work/day4/d4p1/d4p1.component';
import { D4p24Component } from './css-work/day4/d4p24/d4p24.component';
import { D4pextraComponent } from './css-work/day4/d4pextra/d4pextra.component';
import { D5a1Component } from './css-work/day5/d5a1/d5a1.component';
import { D5p1Component } from './css-work/day5/d5p1/d5p1.component';
import { D6a1p7Component } from './css-work/day6/d6a1p7/d6a1p7.component';
import { D6p56Component } from './css-work/day6/d6p56/d6p56.component';
import { D6pextraComponent } from './css-work/day6/d6pextra/d6pextra.component';
import { D7a1Component } from './css-work/day7/d7a1/d7a1.component';
import { D8a1Component } from './css-work/day8/d8a1/d8a1.component';
import { D8p1Component } from './css-work/day8/d8p1/d8p1.component';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { Assignment1Component } from './html-work/day3/assignment1/assignment1.component';
import { Practice1Component } from './html-work/day3/practice1/practice1.component';
import { Practice2Component } from './html-work/day3/practice2/practice2.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { D15a1Component } from './js-work/day15/d15a1/d15a1.component';
import { D15p1Component } from './js-work/day15/d15p1/d15p1.component';
import { D15p2Component } from './js-work/day15/d15p2/d15p2.component';
import { D15pe1Component } from './js-work/day15/d15pe1/d15pe1.component';
import { D15pe2Component } from './js-work/day15/d15pe2/d15pe2.component';
import { D15pe3Component } from './js-work/day15/d15pe3/d15pe3.component';
import { D15pe4Component } from './js-work/day15/d15pe4/d15pe4.component';
import { D15pe5Component } from './js-work/day15/d15pe5/d15pe5.component';
import { D15pe6Component } from './js-work/day15/d15pe6/d15pe6.component';
import { D15pe7Component } from './js-work/day15/d15pe7/d15pe7.component';
import { D16a1Component } from './js-work/day16/d16a1/d16a1.component';
import { D16p1Component } from './js-work/day16/d16p1/d16p1.component';
import { D16pe1Component } from './js-work/day16/d16pe1/d16pe1.component';
import { D17a1Component } from './js-work/day17/d17a1/d17a1.component';
import { D17p1Component } from './js-work/day17/d17p1/d17p1.component';
import { D17p2Component } from './js-work/day17/d17p2/d17p2.component';
import { D17pe1Component } from './js-work/day17/d17pe1/d17pe1.component';
import { D18a1Component } from './js-work/day18/d18a1/d18a1.component';
import { D18p1Component } from './js-work/day18/d18p1/d18p1.component';
import { D18p2Component } from './js-work/day18/d18p2/d18p2.component';
import { D18p3Component } from './js-work/day18/d18p3/d18p3.component';
import { D18pe1Component } from './js-work/day18/d18pe1/d18pe1.component';
import { D19p1Component } from './js-work/day19/d19p1/d19p1.component';
import { D19p2Component } from './js-work/day19/d19p2/d19p2.component';
import { D19p3Component } from './js-work/day19/d19p3/d19p3.component';
import { D19p4Component } from './js-work/day19/d19p4/d19p4.component';
import { D19p5Component } from './js-work/day19/d19p5/d19p5.component';
import { D19p6Component } from './js-work/day19/d19p6/d19p6.component';
import { D20a1Component } from './js-work/day20/d20a1/d20a1.component';
import { D20p1GetdataComponent } from './js-work/day20/d20p1-getdata/d20p1-getdata.component';
import { D20p1SetdataComponent } from './js-work/day20/d20p1-setdata/d20p1-setdata.component';
import { D20pe1Component } from './js-work/day20/d20pe1/d20pe1.component';
import { D20pe2Component } from './js-work/day20/d20pe2/d20pe2.component';
import { D20pe3Component } from './js-work/day20/d20pe3/d20pe3.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component: WelcomeComponent},
  {path:"html", component: HtmlComponent,
    children: [
      {path:"day3/assignment1", component:Assignment1Component},
      {path:"day3/practice1", component:Practice1Component},
      {path:"day3/practice2", component:Practice2Component}
    ] 
  },
  {path:"css", component: CssComponent,
    children: [
      {path:"day4/assignment1", component:D4a1Component},
      {path:"day4/practice1", component:D4p1Component},
      {path:"day4/practice2-4", component:D4p24Component},
      {path:"day4/practice-extra", component:D4pextraComponent},
      {path:"day5/assignment1", component:D5a1Component},
      {path:"day5/practice1", component:D5p1Component},
      {path:"day6/assignment1-practice7", component:D6a1p7Component},
      {path:"day6/practice5-6", component:D6p56Component},
      {path:"day6/practice-extra", component:D6pextraComponent},
      {path:"day7/assignment1", component:D7a1Component},
      {path:"day8/assignment1", component:D8a1Component},
      {path:"day8/practice1", component:D8p1Component},
    ]
  },
  {path:"javascript", component: JavascriptComponent,
    children: [
      {path:"day15/assignment1", component:D15a1Component},
      {path:"day15/practice1", component:D15p1Component},
      {path:"day15/practice2", component:D15p2Component},
      {path:"day15/practice-extra1", component:D15pe1Component},
      {path:"day15/practice-extra2", component:D15pe2Component},
      {path:"day15/practice-extra3", component:D15pe3Component},
      {path:"day15/practice-extra4", component:D15pe4Component},
      {path:"day15/practice-extra5", component:D15pe5Component},
      {path:"day15/practice-extra6", component:D15pe6Component},
      {path:"day15/practice-extra7", component:D15pe7Component},
      {path:"day16/assignment1", component:D16a1Component},
      {path:"day16/practice1-5", component:D16p1Component},
      {path:"day16/practice-extra", component:D16pe1Component},
      {path:"day17/assignment1", component:D17a1Component},
      {path:"day17/practice1", component:D17p1Component},
      {path:"day17/practice2", component:D17p2Component},
      {path:"day17/practice-extra1", component:D17pe1Component},
      {path:"day18/assignment1", component:D18a1Component},
      {path:"day18/practice1", component:D18p1Component},
      {path:"day18/practice2", component:D18p2Component},
      {path:"day18/practice3", component:D18p3Component},
      {path:"day18/practice-extra", component:D18pe1Component},
      {path:"day19/practice1", component:D19p1Component},
      {path:"day19/practice2", component:D19p2Component},
      {path:"day19/practice3", component:D19p3Component},
      {path:"day19/practice4", component:D19p4Component},
      {path:"day19/practice5", component:D19p5Component},
      {path:"day19/practice6", component:D19p6Component},
      {path:"day20/assignment1", component:D20a1Component},
      {path:"day20/practice1-setData", component:D20p1SetdataComponent},
      {path:"day20/practice1-getData", component:D20p1GetdataComponent},
      {path:"day20/practice-extra1", component:D20pe1Component},
      {path:"day20/practice-extra2", component:D20pe2Component},
      {path:"day20/practice-extra3", component:D20pe3Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
