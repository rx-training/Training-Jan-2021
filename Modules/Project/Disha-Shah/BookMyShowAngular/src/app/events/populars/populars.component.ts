import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit, OnDestroy {

  popularsList: Array<IActivities> = [];

  uniquePopularsList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getAllPopularsSub: Subscription;
  getAllLanguagesSub: Subscription;

  constructor(private service: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getPopulars();
    this.getLanguages();
  }

  ngOnDestroy(){
    this.getAllPopularsSub.unsubscribe();
    this.getAllLanguagesSub.unsubscribe();
  }

  getPopulars(): void{
    this.getAllPopularsSub = this.service.getPopulars()
    .subscribe((populars: any[]) => {
      this.popularsList = populars,
      this.uniquePopularsList = this.popularsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniquePopularsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.popularsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniquePopularsList.slice(0,10)
    });  
  }

  getLanguages(): void{
    this.getAllLanguagesSub = this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

}
