import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTMLComponentComponent } from './htmlcomponent/htmlcomponent.component';
import { CSSComponentComponent } from './csscomponent/csscomponent.component';
import { JavaScriptComponentComponent } from './java-script-component/java-script-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HTMLComponentComponent,
    CSSComponentComponent,
    JavaScriptComponentComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
