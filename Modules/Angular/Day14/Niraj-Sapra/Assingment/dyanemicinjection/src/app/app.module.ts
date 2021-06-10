import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdemoComponent } from './studentdemo/studentdemo.component';
import { fromEventPattern } from 'rxjs';
import { StudnetassignmentComponent } from './studnetassignment/studnetassignment.component';
// import { API_URL, valueDataservice } from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentdemoComponent,
    StudnetassignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers:[
    // {provide:valueDataservice},
    // {provide:API_URL,useValue:'https://angular.io/guide/dependency-injectio',}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
