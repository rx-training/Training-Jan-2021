import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CSSRoutingModule } from './css-routing.module';
import { CSSComponent } from '../css/css.component';
import { CSSHOMEComponent } from './css-home/css-home.component';
import { FloatproperyComponent } from './Day5/Practice/floatpropery/floatpropery.component';
import { BasicLayoutComponent } from './Day5/Practice/basic-layout/basic-layout.component';
import { OverflowwithscrollComponent } from './Day5/Practice/overflowwithscroll/overflowwithscroll.component';
import { OverflowwithhiddenComponent } from './Day5/Practice/overflowwithhidden/overflowwithhidden.component';
import { OverflowwithvisibleComponent } from './Day5/Practice/overflowwithvisible/overflowwithvisible.component';
import { PositionPropertyComponent } from './Day5/Practice/position-property/position-property.component';
import { AssignmentComponent } from './Day5/Assignment/assignment/assignment.component';
import { Practice1Component } from './Day6/Practice/practice1/practice1.component';
import { Practice2Component } from './Day6/Practice/practice2/practice2.component';
import { Practice3Component } from './Day6/Practice/practice3/practice3.component';
import { Practice4Component } from './Day6/Practice/practice4/practice4.component';
import { Practice5Component } from './Day6/Practice/practice5/practice5.component';
import { Practice6Component } from './Day6/Practice/practice6/practice6.component';
import { Practice7Component } from './Day6/Practice/practice7/practice7.component';
import { Practice8Component } from './Day6/Practice/practice8/practice8.component';
import { Practice9Component } from './Day6/Practice/practice9/practice9.component';
import { Practice10Component } from './Day6/Practice/practice10/practice10.component';
import { Practice11Component } from './Day6/Practice/practice11/practice11.component';
import { Practice12Component } from './Day6/Practice/practice12/practice12.component';
import { Practice13Component } from './Day6/Practice/practice13/practice13.component';
import { Practice14Component } from './Day6/Practice/practice14/practice14.component';
import { Day6AssignmentComponent } from './Day6/Assignment/day6-assignment/day6-assignment.component';
import { AssignmentDay7Component } from './Day7/Assignment/assignment-day7/assignment-day7.component';
import { Day7Practice1Component } from './Day7/Practice/day7-practice1/day7-practice1.component';
import { Day7Practice2Component } from './Day7/Practice/day7-practice2/day7-practice2.component';
import { Day7Practice3Component } from './Day7/Practice/day7-practice3/day7-practice3.component';
import { Day7Practice4Component } from './Day7/Practice/day7-practice4/day7-practice4.component';
import { Day8Practice1Component } from './Day8/Practice/day8-practice1/day8-practice1.component';
import { AssignmentDay8Component } from './Day8/Assignment/assignment-day8/assignment-day8.component';



@NgModule({
  declarations: [
    CSSComponent,
    CSSHOMEComponent,
    FloatproperyComponent,
    BasicLayoutComponent,
    OverflowwithscrollComponent,
    OverflowwithhiddenComponent,
    OverflowwithvisibleComponent,
    PositionPropertyComponent,
    AssignmentComponent,
    Practice1Component,
    Practice2Component,
    Practice3Component,
    Practice4Component,
    Practice5Component,
    Practice6Component,
    Practice7Component,
    Practice8Component,
    Practice9Component,
    Practice10Component,
    Practice11Component,
    Practice12Component,
    Practice13Component,
    Practice14Component,
    Day6AssignmentComponent,
    AssignmentDay7Component,
    Day7Practice1Component,
    Day7Practice2Component,
    Day7Practice3Component,
    Day7Practice4Component,
    Day8Practice1Component,
    AssignmentDay8Component,
  ],
  imports: [
    CommonModule,
    CSSRoutingModule
  ]
})
export class CSSModule { }
