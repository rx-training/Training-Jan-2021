import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServerComponent } from './server/server.component';
import { SingleServerComponent } from './single-server/single-server.component';
import { SingleUserComponent } from './single-user/single-user.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'server', component: ServerComponent, children:[
    { path: ':id', component: SingleServerComponent },
    { path: ':id/edit', component: EditServerComponent }
  ] },
  { path: 'users', component: UserComponent, children:[
    { path: ':id/:name', component: SingleUserComponent }
  ] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
