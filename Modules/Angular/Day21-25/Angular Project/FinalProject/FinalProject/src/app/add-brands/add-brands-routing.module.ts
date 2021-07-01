import { AddBrandComponent } from './../add-brand/add-brand.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path:'addbrands',component:AddBrandComponent,children:
  [
    {path:'',component:AddBrandComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})  
export class AddBrandsRoutingModule { }
