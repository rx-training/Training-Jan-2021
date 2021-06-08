import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StudentListService} from './student-list.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponentComponent } from './student-component/student-component.component';
import { StudentListComponent } from './student-list/student-list.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //providers : [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
