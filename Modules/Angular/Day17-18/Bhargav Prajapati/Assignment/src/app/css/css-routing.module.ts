import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CSSHOMEComponent } from './css-home/css-home.component';
import { CSSComponent } from './css.component';
import { AssignmentComponent } from './Day5/Assignment/assignment/assignment.component';
import { BasicLayoutComponent } from './Day5/Practice/basic-layout/basic-layout.component';
import { FloatproperyComponent } from './Day5/Practice/floatpropery/floatpropery.component';
import { OverflowwithhiddenComponent } from './Day5/Practice/overflowwithhidden/overflowwithhidden.component';
import { OverflowwithscrollComponent } from './Day5/Practice/overflowwithscroll/overflowwithscroll.component';
import { OverflowwithvisibleComponent } from './Day5/Practice/overflowwithvisible/overflowwithvisible.component';
import { PositionPropertyComponent } from './Day5/Practice/position-property/position-property.component';
import { Day6AssignmentComponent } from './Day6/Assignment/day6-assignment/day6-assignment.component';
import { Practice1Component } from './Day6/Practice/practice1/practice1.component';
import { Practice10Component } from './Day6/Practice/practice10/practice10.component';
import { Practice11Component } from './Day6/Practice/practice11/practice11.component';
import { Practice12Component } from './Day6/Practice/practice12/practice12.component';
import { Practice13Component } from './Day6/Practice/practice13/practice13.component';
import { Practice14Component } from './Day6/Practice/practice14/practice14.component';
import { Practice2Component } from './Day6/Practice/practice2/practice2.component';
import { Practice3Component } from './Day6/Practice/practice3/practice3.component';
import { Practice4Component } from './Day6/Practice/practice4/practice4.component';
import { Practice5Component } from './Day6/Practice/practice5/practice5.component';
import { Practice6Component } from './Day6/Practice/practice6/practice6.component';
import { Practice7Component } from './Day6/Practice/practice7/practice7.component';
import { Practice8Component } from './Day6/Practice/practice8/practice8.component';
import { Practice9Component } from './Day6/Practice/practice9/practice9.component';
import { AssignmentDay7Component } from './Day7/Assignment/assignment-day7/assignment-day7.component';
import { Day7Practice1Component } from './Day7/Practice/day7-practice1/day7-practice1.component';
import { Day7Practice2Component } from './Day7/Practice/day7-practice2/day7-practice2.component';
import { Day7Practice3Component } from './Day7/Practice/day7-practice3/day7-practice3.component';
import { Day7Practice4Component } from './Day7/Practice/day7-practice4/day7-practice4.component';
import { AssignmentDay8Component } from './Day8/Assignment/assignment-day8/assignment-day8.component';
import { Day8Practice1Component } from './Day8/Practice/day8-practice1/day8-practice1.component';

const routes: Routes = 
[
  {path:'CSS',component:CSSComponent,children:
  [
  {path:'',component:CSSHOMEComponent},
  {path:'floatProperty',component:FloatproperyComponent},
  {path:'basiclayout',component:BasicLayoutComponent},
  {path:'overflowwithscroll',component:OverflowwithscrollComponent},
  {path:'overflowwithhidden',component:OverflowwithhiddenComponent},
  {path:'overflowwithvisible',component:OverflowwithvisibleComponent},
  {path:'positionproperty',component:PositionPropertyComponent},
  {path:'Day5Assignment',component:AssignmentComponent},


  {path:'Day6Practice1',component:Practice1Component},
  {path:'Day6Practice2',component:Practice2Component},
  {path:'Day6Practice3',component:Practice3Component},
  {path:'Day6Practice4',component:Practice4Component},
  {path:'Day6Practice5',component:Practice5Component},
  {path:'Day6Practice6',component:Practice6Component},
  {path:'Day6Practice7',component:Practice7Component},
  {path:'Day6Practice8',component:Practice8Component},
  {path:'Day6Practice9',component:Practice9Component},
  {path:'Day6Practice10',component:Practice10Component},
  {path:'Day6Practice11',component:Practice11Component},
  {path:'Day6Practice12',component:Practice12Component},
  {path:'Day6Practice13',component:Practice13Component},
  {path:'Day6Practice14',component:Practice14Component},
  {path:'Day6Assignment',component:Day6AssignmentComponent},


  {path:'Day7Practice1',component:Day7Practice1Component},
  {path:'Day7Practice2',component:Day7Practice2Component},
  {path:'Day7Practice3',component:Day7Practice3Component},
  {path:'Day7Practice4',component:Day7Practice4Component},
  {path:'Day7Assignment',component:AssignmentDay7Component},


  {path:'Day8Practice1',component:Day8Practice1Component},
  {path:'Day8Assignment',component:AssignmentDay8Component}

  

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CSSRoutingModule { }
