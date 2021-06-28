import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartsComponent } from '../carts/carts.component';


  const routes: Routes = [
    {path:'cart',component:CartsComponent,children:
    [
      {path:'',component:CartsComponent}
    ]}
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
