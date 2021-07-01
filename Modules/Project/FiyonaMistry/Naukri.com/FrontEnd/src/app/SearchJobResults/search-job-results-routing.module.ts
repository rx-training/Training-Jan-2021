import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticularJobDetailComponent } from './particular-job-detail/particular-job-detail.component';
import { SearchJobResultsComponent } from './search-job-results/search-job-results.component';

const routes: Routes = [
  { path : '', component : SearchJobResultsComponent, children : [
    { path : 'jobDetails/:jobId', component : ParticularJobDetailComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchJobResultsRoutingModule { }
