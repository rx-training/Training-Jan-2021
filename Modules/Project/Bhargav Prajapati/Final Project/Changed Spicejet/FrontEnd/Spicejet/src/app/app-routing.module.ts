import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnAuthoRizedComponent } from './un-autho-rized/un-autho-rized.component';
const routes: Routes = [
  {path:'',redirectTo:'Booking',pathMatch:"full"},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
