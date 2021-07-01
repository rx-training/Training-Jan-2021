import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Day15IndexComponent } from "./Day15/day15-index/day15-index.component";
import { JsDay16AssignmentComponent } from "./Day16/js-day16-assignment/js-day16-assignment.component";
import { JsDay16PracticeComponent } from "./Day16/js-day16-practice/js-day16-practice.component";
import { JsDay17AssignmentComponent } from "./Day17/js-day17-assignment/js-day17-assignment.component";
import { JsDay17PracticeComponent } from "./Day17/js-day17-practice/js-day17-practice.component";
import { JsDay18AssignmentComponent } from "./Day18/js-day18-assignment/js-day18-assignment.component";
import { JsDay18ExcerciseComponent } from "./Day18/js-day18-excercise/js-day18-excercise.component";
import { JsDay19ExcerciseComponent } from "./Day19/js-day19-excercise/js-day19-excercise.component";
import { JsDay20AssignmentComponent } from "./Day20/js-day20-assignment/js-day20-assignment.component";
import { JsDay20ExcerciseComponent } from "./Day20/js-day20-excercise/js-day20-excercise.component";
import { JsDay20PracticeComponent } from "./Day20/js-day20-practice/js-day20-practice.component";
import { JavascriptComponent } from "./javascript.component";

const JsRoutes:Routes=[{
    path:"" , component:JavascriptComponent , children:[
            {path:"Day15/index",component:Day15IndexComponent},
            {path:"Day16/Assignment",component:JsDay16AssignmentComponent},
            {path:"Day16/Excercise",component:JsDay16PracticeComponent},
            {path:"Day17/Assignment",component:JsDay17AssignmentComponent},
            {path:"Day17/Practice",component:JsDay17PracticeComponent},
            {path:"Day18/Assignment",component:JsDay18AssignmentComponent},
            {path:"Day18/Excercise",component:JsDay18ExcerciseComponent},
            {path:"Day19/Excercise",component:JsDay19ExcerciseComponent},
            {path:"Day20/Assignment",component:JsDay20AssignmentComponent},
            {path:"Day20/Excercise",component:JsDay20ExcerciseComponent},
            {path:"Day20/Practice",component:JsDay20PracticeComponent},
            
          ]}]
    
      @NgModule({
          imports:[RouterModule.forChild(JsRoutes)],
          exports:[RouterModule]
      })
    export class JsRoutingModule{}