import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ApplistComponent } from './applist/applist.component';
import { AppformComponent } from './appform/appform.component';
import { FormsModule } from '@angular/forms';
import { ChildCompoComponent } from './child-compo/child-compo.component';
import { ParentCompoComponent } from './parent-compo/parent-compo.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    ApplistComponent,
    AppformComponent,
    ChildCompoComponent,
    ParentCompoComponent,
    StockstatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
