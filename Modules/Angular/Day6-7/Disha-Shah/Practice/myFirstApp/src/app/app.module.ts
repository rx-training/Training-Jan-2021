import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { ServerComponent } from './server/server.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipePipe } from './exponential-strength-pipe.pipe';
import { JokeListComponent } from './joke-list/joke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalComponent,
    ServerComponent,
    HelloWorldComponent,
    PipesComponent,
    ExponentialStrengthPipePipe,
    JokeListComponent
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
