import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenageProductComponent } from './menage-product/menage-product.component';
import { RestApiComponent } from './rest-api/rest-api.component';

const routes: Routes = [
  {path:'',redirectTo:'/FirebaseExample',pathMatch:'full'},
  {path:'FirebaseExample',component:MenageProductComponent},
  {path:'RestAPIExample',component:RestApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
