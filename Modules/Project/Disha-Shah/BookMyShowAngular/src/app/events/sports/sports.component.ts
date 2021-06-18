import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsList: Array<IActivities> = [];

  uniqueSportsList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getSports(): void{
    this.service.getSports()
    .subscribe((sports: any[]) => {
      this.sportsList = sports,
      this.uniqueSportsList = this.sportsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniqueSportsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.sportsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniqueSportsList.slice(0,10)
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

  constructor(private service: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getSports();
    this.getLanguages();
  }


}
