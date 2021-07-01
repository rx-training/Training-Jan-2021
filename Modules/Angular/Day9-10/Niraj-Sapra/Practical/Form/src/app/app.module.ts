import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { FormAssingmentComponent } from './form-assingment/form-assingment.component';
import { BookbindingTemplateComponent } from './bookbinding-template/bookbinding-template.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    FormAssingmentComponent,
    BookbindingTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
