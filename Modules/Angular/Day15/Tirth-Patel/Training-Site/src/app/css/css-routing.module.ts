import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CssComponent } from "./css.component";
import { Day4ResumeComponent } from "./Day4/day4-resume/day4-resume.component";
import { Day4VideosExcerciseComponent } from "./Day4/day4-videos-excercise/day4-videos-excercise.component";
import { PracticeComponent } from "./Day4/practice/practice.component";
import { Day5AssignmentComponent } from "./Day5/day5-assignment/day5-assignment.component";
import { Day5ExcerciseComponent } from "./Day5/day5-excercise/day5-excercise.component";
import { Day5NavigationComponent } from "./Day5/day5-navigation/day5-navigation.component";
import { Day6ExcerciseComponent } from "./Day6/day6-excercise/day6-excercise.component";
import { Day6MenuListComponent } from "./Day6/day6-menu-list/day6-menu-list.component";
import { Day7ImgGallaryComponent } from "./Day7/day7-img-gallary/day7-img-gallary.component";
import { Day7Layput1Component } from "./Day7/day7-layput1/day7-layput1.component";
import { Day7MediaqueriesComponent } from "./Day7/day7-mediaqueries/day7-mediaqueries.component";
import { Day8LayoutComponent } from "./Day8/day8-layout/day8-layout.component";

const CssRoutes:Routes=[
    {path:'' , component:CssComponent,children:[
        {path:'Day4/PracticeExcercise',component:PracticeComponent},
        {path:'Day4/Resume',component:Day4ResumeComponent},
        {path:'Day4/Videos-Excercise',component:Day4VideosExcerciseComponent},
        {path:'Day5/Assignment',component:Day5AssignmentComponent},
        {path:'Day5/Excercise',component:Day5ExcerciseComponent},
        {path:'Day5/navigation',component:Day5NavigationComponent},
        {path:'Day6/Excercise',component:Day6ExcerciseComponent},
        {path:'Day6/menulist',component:Day6MenuListComponent},
        {path:'Day7/imgGallary',component:Day7ImgGallaryComponent},
        {path:'Day7/Layout1',component:Day7Layput1Component},
        {path:'Day7/mediaqueries',component:Day7MediaqueriesComponent},
        {path:'Day8/Layout',component:Day8LayoutComponent},
      ]}
];
@NgModule({
    imports:[RouterModule.forChild(CssRoutes)],
    exports:[RouterModule]
})
export class cssRoutingModule{}