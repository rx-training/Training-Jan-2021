import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserComponent} from '../admin-penal/user/user.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {CityComponent} from '../admin-penal/city/city.component';
import {ProductComponent} from '../admin-penal/product/product.component';
import {CategoryComponent} from '../admin-penal/category/category.component';
import { AdminPenalComponent } from './admin-penal.component';

// const routes: Routes = [
//   {path:'User', component : UserComponent},
//   {path:'Restaurant', component : RestaurantComponent},
//   {path:'City', component : CityComponent},
//   {path:'Product', component : ProductComponent}
// ];
@NgModule({
  imports: [
      RouterModule.forChild([
          {
              path: 'admin',
              component: AdminPenalComponent,
              children: [
                  {path:'adminUser', component : UserComponent},
                  {path:'Restaurant', component : RestaurantComponent},
                  {path:'City', component : CityComponent},
                  {path:'Product', component : ProductComponent},
                  {path:'Category', component : CategoryComponent}
              ]
          }
      ])
  ],
  exports: [
      RouterModule
  ]
})
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export class AdminRoutingModule { }
