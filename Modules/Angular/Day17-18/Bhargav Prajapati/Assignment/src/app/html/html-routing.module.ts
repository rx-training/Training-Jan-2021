import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentComponent } from './Day3/Assignment/assignment/assignment.component';
import { ArticaltegComponent } from './Day3/Practice/articalteg/articalteg.component';
import { HrDepartmentComponent } from './Day3/Practice/hr-department/hr-department.component';
import { NavbarComponent } from './Day3/Practice/navbar/navbar.component';
import { StudentreportcardComponent } from './Day3/Practice/studentreportcard/studentreportcard.component';
import { AssignmentDay4Component } from './Day4/Assignment/assignment-day4/assignment-day4.component';
import { BorderwithperegraphComponent } from './Day4/Practice/borderwithperegraph/borderwithperegraph.component';
import { DisplayPropertiesComponent } from './Day4/Practice/display-properties/display-properties.component';
import { UniversalPropertiesComponent } from './Day4/Practice/universal-properties/universal-properties.component';
import { UseofcssComponent } from './Day4/Practice/useofcss/useofcss.component';
import { HTMLHOMEComponent } from './html-home/html-home.component';
  import { HTMLComponent } from './html.component';

const routes: Routes = [
  {path:'HTML',component:HTMLComponent,children:
  [
    {path:'',component:HTMLHOMEComponent},
    {path:'Articalteg',component:ArticaltegComponent},
    {path:'HrDeparment',component:HrDepartmentComponent},
    {path:'Navbar',component:NavbarComponent},
    {path:'StudentReortCard',component:StudentreportcardComponent},
    {path:'AssignmentDay3',component:AssignmentComponent},
    
    {path:'borderwithparagraph',component:BorderwithperegraphComponent},
    {path:'DisplayProperty1',component:DisplayPropertiesComponent},
    {path:'useofcss',component:UseofcssComponent},
    {path:'univarsalProperty',component:UniversalPropertiesComponent},
    {path:'AssignmentDay4',component:AssignmentDay4Component}
   
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HTMLRoutingModule { }
