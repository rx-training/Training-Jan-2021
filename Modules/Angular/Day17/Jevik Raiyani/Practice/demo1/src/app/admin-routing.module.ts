import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RightsComponent } from './rights/rights.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {path:'',redirectTo:'admin',pathMatch:'full'},
    {  path: 'admin', component: DashboardComponent,
       children :[
           { path: 'user', component: UserComponent},
           { path: 'rights', component: RightsComponent},
       ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRoutesComponent = [UserComponent,RightsComponent,DashboardComponent]