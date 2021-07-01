import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPlaysComponent } from './all-plays/all-plays.component';

const routes: Routes = [
  {
    path: '',
    component: AllPlaysComponent, children: [
      {
        path: 'filter',
        component: AllPlaysComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPlaysRoutingModule { }
