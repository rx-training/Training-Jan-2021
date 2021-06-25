import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterNowRoutingModule } from './register-now-routing.module';
import { RegisterNowComponent } from './register-now/register-now.component';
import { PersonalComponent } from './personal/personal.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';


@NgModule({
  declarations: [
    RegisterNowComponent,
    PersonalComponent,
    EducationComponent,
    EmploymentComponent
  ],
  imports: [
    CommonModule,
    RegisterNowRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterNowModule { }
