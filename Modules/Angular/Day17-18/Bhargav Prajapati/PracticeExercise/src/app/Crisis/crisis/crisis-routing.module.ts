import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from '../crisis-center/crisis-center.component';
import { CrisisDetailsComponent } from '../crisis-details/crisis-details.component';
import { CrisisHomeComponent } from '../crisis-home/crisis-home.component';
import { CrisisListComponent } from '../crisis-list/crisis-list.component';

const routes: Routes = 
[
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailsComponent,
            
          },
          {
            path: '',
            component: CrisisHomeComponent
          }
        ]
      }
    ]
  }
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
