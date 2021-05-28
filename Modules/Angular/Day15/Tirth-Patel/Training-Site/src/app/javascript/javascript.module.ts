import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
import { JsRoutingModule } from "./javascript-routing.module";
import { JavascriptComponent } from "./javascript.component";

@NgModule({
    imports:[CommonModule,
    FormsModule,
JsRoutingModule],
declarations:[ 
    JavascriptComponent,
    Day15IndexComponent,
    JsDay16AssignmentComponent,
    JsDay16PracticeComponent,
    JsDay17PracticeComponent,
    JsDay17AssignmentComponent,
    JsDay18AssignmentComponent,
    JsDay18ExcerciseComponent,
    JsDay19ExcerciseComponent,
    JsDay20AssignmentComponent,
    JsDay20ExcerciseComponent,
    JsDay20PracticeComponent
]
})
export class JsModule{}
