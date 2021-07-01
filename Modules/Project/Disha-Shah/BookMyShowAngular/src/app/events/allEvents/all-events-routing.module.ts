import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllEventsComponent } from './all-events/all-events.component';

const routes: Routes = [
  {
    path: '',
    component: AllEventsComponent, children: [
      {
        path: 'filter',
        component: AllEventsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllEventsRoutingModule { }
