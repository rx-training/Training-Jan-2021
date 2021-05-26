import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NgforcomponentComponent } from './ngforcomponent/ngforcomponent.component';
import { HighlightDirective } from './highlight.directive';
import { StudentComponentComponent } from './student-component/student-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NgforcomponentComponent,
    HighlightDirective,
    StudentComponentComponent
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
