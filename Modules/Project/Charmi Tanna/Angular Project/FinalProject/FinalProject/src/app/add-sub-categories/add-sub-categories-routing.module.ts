import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubCategoriesComponent } from './add-sub-categories.component';

const routes: Routes = [
  {path:'addsubcategories',component:AddSubCategoriesComponent,children:
  [
    {path:'',component:AddSubCategoriesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSubCategoriesRoutingModule { }
