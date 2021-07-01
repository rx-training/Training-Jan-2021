import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { LoginHomePageComponent } from './login-home-page/login-home-page.component';

const routes: Routes = [
  { path : '', component : LoginHomePageComponent, children : [
    { path : 'updateProfile', component : EditProfileComponent },
    { path : 'updateProfile/:jobSeekerEducationId', component : EditProfileComponent }
 ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginHomePageRoutingModule { }
