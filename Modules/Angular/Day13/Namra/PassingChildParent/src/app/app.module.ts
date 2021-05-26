import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ParentLocalComponentComponent } from './parent-local-component/parent-local-component.component';
import { ChildLocalComponentComponent } from './child-local-component/child-local-component.component';
import { ParentViewComponentComponent } from './parent-view-component/parent-view-component.component';
import { ChildViewComponentComponent } from './child-view-component/child-view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ChildComponentComponent,
    ParentComponentComponent,
    ParentLocalComponentComponent,
    ChildLocalComponentComponent,
    ParentViewComponentComponent,
    ChildViewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
