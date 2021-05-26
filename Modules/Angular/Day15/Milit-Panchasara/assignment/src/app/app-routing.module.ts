import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './css/css.component';
import { HomeComponent } from './home/home.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:"", component: WelcomeComponent},
  {path:"html", component: HtmlComponent},
  {path:"css", component: CssComponent},
  {path:"javascript", component: JavascriptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
