import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {StudentComponent} from './student/student.component';
import {FacultComponent} from './facult/facult.component';
import {StudentdetailComponent} from './studentdetail/studentdetail.component';
import {FeesComponent} from './fees/fees.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"home",component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:"student",component:StudentComponent},
{path:"student/:id",component:StudentdetailComponent,
children:[{path:"fees",component:FeesComponent},
{path:"result",component:ResultComponent}]},
{path:"facult",component:FacultComponent},];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
