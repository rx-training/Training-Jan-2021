import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { PersonalComponent } from './personal/personal.component';
import { RegisterNowComponent } from './register-now/register-now.component';

const routes: Routes = [
  { path : '', component : RegisterNowComponent, children : [
    { path : 'personal', component : PersonalComponent },
    { path : 'education', component : EducationComponent },
    { path : 'employment', component : EmploymentComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterNowRoutingModule { }
