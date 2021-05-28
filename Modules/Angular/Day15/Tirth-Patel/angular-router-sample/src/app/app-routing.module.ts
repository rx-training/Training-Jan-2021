import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';

import { EditServerComponent } from './edit-server/edit-server.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component'; 

const appRoutes: Routes = [
  {
    path: 'crisis-center', loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
    data: { preload: true }
  },
 
  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]; 
// const VideosRoutes :Routes =[

//   {path:'',component:HomeComponent},
//   {path:'users',component:UsersComponent,children:[
//     {path:':id/:name',component:UserComponent}
//   ]},

//   {path:'servers',component:ServersComponent,children:[
//     {path:':id',component:ServerComponent},
//     {path:':id/edit',component:EditServerComponent}
//   ]},
//   { path: '**', component: PageNotFoundComponent },
// ]
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
       
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
