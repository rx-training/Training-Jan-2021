import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirPracticeComponent } from './dir-practice/dir-practice.component';
import { PipePracticeComponent } from './pipe-practice/pipe-practice.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { HighlightDirective } from './highlight.directive';
import { ApiTestComponent } from './api-test/api-test.component';
import { VowelsPipe } from './vowels.pipe';
import { GradeColorsDirective } from './grade-colors.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirPracticeComponent,
    PipePracticeComponent,
    CustomPipePipe,
    HighlightDirective,
    ApiTestComponent,
    VowelsPipe,
    GradeColorsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, DirPracticeComponent, ApiTestComponent, PipePracticeComponent]
})
export class AppModule { }
