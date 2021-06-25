import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchJobResultsRoutingModule } from './search-job-results-routing.module';
import { SearchJobResultsComponent } from './search-job-results/search-job-results.component';
import { ParticularJobDetailComponent } from './particular-job-detail/particular-job-detail.component';


@NgModule({
  declarations: [
    SearchJobResultsComponent,
    ParticularJobDetailComponent
  ],
  imports: [
    CommonModule,
    SearchJobResultsRoutingModule
  ]
})
export class SearchJobResultsModule { }
