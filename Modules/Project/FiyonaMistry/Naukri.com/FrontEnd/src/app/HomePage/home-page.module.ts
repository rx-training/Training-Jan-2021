import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FindJobComponent } from './find-job/find-job.component';
import { RecommendedJobsComponent } from './recommended-jobs/recommended-jobs.component';
import { SearchJobsOnGoComponent } from './search-jobs-on-go/search-jobs-on-go.component';
import { HorizontalAdComponent } from './Ads/horizontal-ad/horizontal-ad.component';
import { TopEmployersComponent } from './Ads/top-employers/top-employers.component';
import { BestPlacesToWorkComponent } from './best-places-to-work/best-places-to-work.component';
import { GetBestMatchedJobsComponent } from './get-best-matched-jobs/get-best-matched-jobs.component';
import { JobSpeakComponent } from './job-speak/job-speak.component';
import { FastForwardComponent } from './fast-forward/fast-forward.component';
import { LearningComponent } from './learning/learning.component';
import { ServicesForRecruitersComponent } from './services-for-recruiters/services-for-recruiters.component';
import { JobGalleryComponent } from './job-gallery/job-gallery.component';
import { PremiumDesignationsComponent } from './premium-designations/premium-designations.component';
import { TopSkillComponent } from './top-skill/top-skill.component';
import { JobByCategoryComponent } from './job-by-category/job-by-category.component';
import { JobByLocationComponent } from './job-by-location/job-by-location.component';
import { LearningCoursesComponent } from './learning-courses/learning-courses.component';
import { VerticalAdComponent } from './Ads/vertical-ad/vertical-ad.component';


@NgModule({
  declarations: [
    HomePageComponent,
    FindJobComponent,
    RecommendedJobsComponent,
    SearchJobsOnGoComponent,
    HorizontalAdComponent,
    TopEmployersComponent,
    BestPlacesToWorkComponent,
    GetBestMatchedJobsComponent,
    JobSpeakComponent,
    FastForwardComponent,
    LearningComponent,
    ServicesForRecruitersComponent,
    JobGalleryComponent,
    PremiumDesignationsComponent,
    TopSkillComponent,
    JobByCategoryComponent,
    JobByLocationComponent,
    LearningCoursesComponent,
    VerticalAdComponent,
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ],
  exports : [
    FindJobComponent,
    FastForwardComponent
  ]
})
export class HomePageModule { }
