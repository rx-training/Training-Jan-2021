import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HtmlComponent } from "./html.component";
import { ArticleComponent } from "./Practice/article/article.component";
import { EmployeeeFormComponent } from "./Practice/employeee-form/employeee-form.component";
import { HrDepartmentComponent } from "./Practice/hr-department/hr-department.component";
import { LoginFormComponent } from "./Practice/login-form/login-form.component";
import { NavigationComponent } from "./Practice/navigation/navigation.component";
import { StudentReportCardComponent } from "./Practice/student-report-card/student-report-card.component";

const htmlRoutes:Routes=[{
    path:"" , component:HtmlComponent , children:[
        {path:"Login-form",component:LoginFormComponent},
        {path:"article",component:ArticleComponent},
        {path:"Employee-Form",component:EmployeeeFormComponent},
        {path:"HrDepartment",component:HrDepartmentComponent},
        {path:"navigation",component:NavigationComponent},
        {path:"student-report-card",component:StudentReportCardComponent},
      ]}];
    
      @NgModule({
          imports:[RouterModule.forChild(htmlRoutes)],
          exports:[RouterModule]
      })
    export class htmlRoutingModule{}
