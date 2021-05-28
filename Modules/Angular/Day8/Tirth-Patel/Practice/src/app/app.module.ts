import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import{ServerComponent} from './server/server.component';
import { NGForComponent } from './ngfor/ngfor.component';
import { AssignmentComponent } from './assignment/assignment.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HighlightDirective } from './highlight.directive';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component'

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    NGForComponent,
    AssignmentComponent,
    HighlightDirective,
    CustomDirectivesComponent
  ],
  imports: [
    FormsModule,NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
