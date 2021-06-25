import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginHomePageRoutingModule } from './login-home-page-routing.module';
import { LoginHomePageComponent } from './login-home-page/login-home-page.component';
import { HomePageModule } from '../HomePage/home-page.module';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { TopCompaniesHiringComponent } from './top-companies-hiring/top-companies-hiring.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditBasicDetailsComponent } from './Modals/edit-basic-details/edit-basic-details.component';
import { EditEducationComponent } from './Modals/edit-education/edit-education.component';
import { EditKeySkillsComponent } from './Modals/edit-key-skills/edit-key-skills.component';
import { EditPersonalDetailsComponent } from './Modals/edit-personal-details/edit-personal-details.component';
import { AddEducationComponent } from './Modals/add-education/add-education.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LoginHomePageComponent,
    ProfileComponent,
    JobsComponent,
    RecruitersComponent,
    TopCompaniesHiringComponent,
    EditProfileComponent,
    EditBasicDetailsComponent,
    EditEducationComponent,
    EditKeySkillsComponent,
    EditPersonalDetailsComponent,
    AddEducationComponent
  ],
  imports: [
    CommonModule,
    LoginHomePageRoutingModule,
    ReactiveFormsModule,
    HomePageModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
  ]
})
export class LoginHomePageModule { }
