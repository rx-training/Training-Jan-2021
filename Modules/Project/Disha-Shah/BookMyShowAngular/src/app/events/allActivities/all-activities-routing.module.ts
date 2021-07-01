import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllActivitiesComponent } from './all-activities/all-activities.component';

const routes: Routes = [
  {
    path: '',
    component: AllActivitiesComponent, children: [
      {
        path: 'filter',
        component: AllActivitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllActivitiesRoutingModule { }
