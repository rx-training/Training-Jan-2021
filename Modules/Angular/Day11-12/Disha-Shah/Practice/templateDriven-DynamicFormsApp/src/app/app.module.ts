import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { HeroTemplateComponent } from './hero-template/hero-template.component';
import { ForbiddenValidatorDirective } from './forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './identity-revealed.directive';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { BuildDynamicFormComponent } from './build-dynamic-form/build-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    HeroTemplateComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    BuildDynamicFormComponent
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
