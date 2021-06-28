
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenComponent } from './women.component';

const routes: Routes = [
  {path:'women',component:WomenComponent,children:
  [
    {path:'',component:WomenComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenRoutingModule { }
