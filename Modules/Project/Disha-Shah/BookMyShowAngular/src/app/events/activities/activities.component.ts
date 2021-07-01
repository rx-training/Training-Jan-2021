import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit, OnDestroy {

  activitiesList: Array<IActivities> = [];

  uniqueActivitiesList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getAllActivitiesSub: Subscription;
  getAllLanguagesSub: Subscription;

  constructor(private service: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getActivities();
    this.getLanguages();
  }

  ngOnDestroy(){
    this.getAllActivitiesSub.unsubscribe();
    this.getAllLanguagesSub.unsubscribe();
  }

  getActivities(): void{
    this.getAllActivitiesSub = this.service.getActivities()
    .subscribe((sports: any[]) => {
      this.activitiesList = sports,
      this.uniqueActivitiesList = this.activitiesList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniqueActivitiesList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.activitiesList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniqueActivitiesList.slice(0,10)
    });  
  }

  getLanguages(): void{
    this.getAllLanguagesSub = this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

}
