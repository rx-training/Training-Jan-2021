import { AllCustomersComponent } from './../all-customers/all-customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'allcustomers',component:AllCustomersComponent,children:
  [
    {path:'',component:AllCustomersComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCustomerRoutingModule { }
