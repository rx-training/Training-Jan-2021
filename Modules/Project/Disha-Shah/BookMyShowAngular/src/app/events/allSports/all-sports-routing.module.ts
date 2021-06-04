import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSportsComponent } from './all-sports/all-sports.component';

const routes: Routes = [
  {
    path: '',
    component: AllSportsComponent, children: [
      {
        path: 'filter',
        component: AllSportsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllSportsRoutingModule { }
