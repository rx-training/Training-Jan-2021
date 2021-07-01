import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { cssRoutingModule } from "./css-routing.module";
import { CssComponent } from "./css.component";
import { Day4ResumeComponent } from "./Day4/day4-resume/day4-resume.component";
import { Day4VideosExcerciseComponent } from "./Day4/day4-videos-excercise/day4-videos-excercise.component";
import { Day5AssignmentComponent } from "./Day5/day5-assignment/day5-assignment.component";
import { Day5ExcerciseComponent } from "./Day5/day5-excercise/day5-excercise.component";
import { Day5NavigationComponent } from "./Day5/day5-navigation/day5-navigation.component";
import { Day6ExcerciseComponent } from "./Day6/day6-excercise/day6-excercise.component";
import { Day6MenuListComponent } from "./Day6/day6-menu-list/day6-menu-list.component";
import { Day7ImgGallaryComponent } from "./Day7/day7-img-gallary/day7-img-gallary.component";
import { Day7Layput1Component } from "./Day7/day7-layput1/day7-layput1.component";
import { Day7MediaqueriesComponent } from "./Day7/day7-mediaqueries/day7-mediaqueries.component";
import { Day8LayoutComponent } from "./Day8/day8-layout/day8-layout.component";

@NgModule({
    imports:[CommonModule,
        FormsModule,
    cssRoutingModule],
    declarations:[CssComponent,
        Day4ResumeComponent,
        Day4VideosExcerciseComponent,
        Day5ExcerciseComponent,
        Day5AssignmentComponent,
        Day5NavigationComponent,
        Day6ExcerciseComponent,
        Day6MenuListComponent,
        Day7ImgGallaryComponent,
        Day7Layput1Component,
        Day7MediaqueriesComponent,
        Day8LayoutComponent
    ]
})
export class cssModule{}
