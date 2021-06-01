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
      console.log(this.sportsList), 
      this.uniqueSportsList = this.sportsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniqueSportsList)
      this.uniqueSportsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.sportsList.forEach(item => {
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

      console.log(this.uniqueSportsList),
      this.finalList = this.uniqueSportsList.slice(0,10),
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
    this.getSports();
    this.getLanguages();
  }


}
