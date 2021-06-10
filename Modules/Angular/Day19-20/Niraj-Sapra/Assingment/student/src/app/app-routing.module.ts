import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentdataComponent } from '../app/studentdata/studentdata.component';

const routes: Routes = [
  { path: 'studentdata', component: StudentdataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
