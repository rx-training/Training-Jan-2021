import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-populars',
  templateUrl: './populars.component.html',
  styleUrls: ['./populars.component.css']
})
export class PopularsComponent implements OnInit {

  popularsList: Array<IActivities> = [];

  uniquePopularsList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getPopulars(): void{
    this.service.getPopulars()
    .subscribe((populars: any[]) => {
      this.popularsList = populars,
      console.log(this.popularsList), 
      this.uniquePopularsList = this.popularsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniquePopularsList)
      this.uniquePopularsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.popularsList.forEach(item => {
          if(item.eventId == element.eventId){
            console.log(element.showTimings);
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});
            console.log(element.showTimings);

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      console.log('lang' + element.languages);
      })

      console.log(this.uniquePopularsList),
      this.finalList = this.uniquePopularsList.slice(0,10),
      console.log(this.finalList)
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages,
      console.log(this.languagesList);
    }); 
  }

  constructor(private service: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getPopulars();
    this.getLanguages();
  }

}
