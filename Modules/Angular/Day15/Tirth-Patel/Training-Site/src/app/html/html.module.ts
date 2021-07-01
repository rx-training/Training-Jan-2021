import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { htmlRoutingModule } from "./html-routing.module";
import { HtmlComponent } from "./html.component";
import { ArticleComponent } from "./Practice/article/article.component";
import { EmployeeeFormComponent } from "./Practice/employeee-form/employeee-form.component";
import { HrDepartmentComponent } from "./Practice/hr-department/hr-department.component";
import { LoginFormComponent } from "./Practice/login-form/login-form.component";
import { NavigationComponent } from "./Practice/navigation/navigation.component";
import { StudentReportCardComponent } from "./Practice/student-report-card/student-report-card.component";

@NgModule({
    imports:[CommonModule,
    FormsModule,
htmlRoutingModule],
declarations:[HtmlComponent,
    ArticleComponent,
    EmployeeeFormComponent
    ,HrDepartmentComponent,
    LoginFormComponent,
    NavigationComponent,
    StudentReportCardComponent
]
})
export class HtmlModule{}
