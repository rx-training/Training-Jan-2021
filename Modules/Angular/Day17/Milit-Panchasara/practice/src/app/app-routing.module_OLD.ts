import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';


const routes: Routes = [
  // { path: 'first-component/:name', component: FirstComponent },
  // { path: 'second-component', component: SecondComponent },
  // { path: 'heroes', component: HeroListComponent },
  // { path: 'hero/:id/:name', component: HeroDetailComponent },
  // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: 'x',   redirectTo: '/heroes', pathMatch: 'full' },
  // { path: 'y',   redirectTo: '/heroes', pathMatch: 'prefix' }, // e.g. => /y/xyz 
  // { path: '**', component: PageNotFoundComponent }
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'crisis-center',
    loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },
  { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {preloadingStrategy: SelectivePreloadingStrategyService},
    //  {enableTracing : true }
     )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
