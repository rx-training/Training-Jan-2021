import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { Cssd4assignComponent } from './cssd4assign/cssd4assign.component';
import { Cssd5assignComponent } from './cssd5assign/cssd5assign.component';
import { Cssd6assignComponent } from './cssd6assign/cssd6assign.component';
import { Cssd7assignComponent } from './cssd7assign/cssd7assign.component';
import { Cssd8assignComponent } from './cssd8assign/cssd8assign.component';
import { Day3Component } from './day3/day3.component';
import { Day3assignmentComponent } from './day3assignment/day3assignment.component';
import { Day3practicalsComponent } from './day3practicals/day3practicals.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { Jsd15assignComponent } from './jsd15assign/jsd15assign.component';
import { Jsd16assignComponent } from './jsd16assign/jsd16assign.component';
import { Jsd17assignComponent } from './jsd17assign/jsd17assign.component';
import { Jsd18assignComponent } from './jsd18assign/jsd18assign.component';
import { Jsd20assignComponent } from './jsd20assign/jsd20assign.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home',component: NavbarComponent},
  {path:'html',component:HtmlComponent, 
  children:[{
    path:'day3',component:Day3Component,
    children:[{
      path:'practical',component:Day3practicalsComponent
    },
    {
      path:'assignment',component:Day3assignmentComponent
    }  
  ]
  }]},
  {path:'css',component:CssComponent,
  children:[
    {path:'day4',component:Cssd4assignComponent},
    {path:'day5',component:Cssd5assignComponent},
    {path:'day6',component:Cssd6assignComponent},
    {path:'day7',component:Cssd7assignComponent},
    {path:'day8',component:Cssd8assignComponent}
  ]},


  {path:'javascript',component:JavascriptComponent,
  children:[
    {path:'day15',component:Jsd15assignComponent},
    {path:'day16',component:Jsd16assignComponent},
    {path:'day17',component:Jsd17assignComponent},
    {path:'day18',component:Jsd18assignComponent},
    {path:'day20',component:Jsd20assignComponent}
  ]},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
