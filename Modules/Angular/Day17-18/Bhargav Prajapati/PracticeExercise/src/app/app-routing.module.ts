import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComposeMessageComponent } from './Crisis/compose-message/compose-message.component';
//import { CrisisCenterComponent } from './Crisis/crisis-center/crisis-center.component';
// import { HeroListComponent } from './Heroes/hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { from } from 'rxjs';

const routes: Routes = 
[
  {path: '',redirectTo:'/heroes',pathMatch:"full"},
  // {path:'heroes',component:HeroListComponent},
  //{path:'crisis-center',component:CrisisCenterComponent},
  {path:'**',component:PageNotFoundComponent },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
