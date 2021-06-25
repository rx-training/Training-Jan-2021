import { NewArrivalsComponent } from './../new-arrivals/new-arrivals.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:NewArrivalsComponent,children:
  [
    {path:'',component:NewArrivalsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewArrivalRoutingModule { }
