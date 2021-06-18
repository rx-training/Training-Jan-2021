import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-comedies',
  templateUrl: './comedies.component.html',
  styleUrls: ['./comedies.component.css']
})
export class ComediesComponent implements OnInit {

  comediesList: Array<IActivities> = [];

  uniqueComediesList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getComedies(): void{
    this.service.getComedies()
    .subscribe((comedies: any[]) => {
      this.comediesList = comedies,
      this.uniqueComediesList = this.comediesList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniqueComediesList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.comediesList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniqueComediesList.slice(0,10)
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
    this.getComedies();
    this.getLanguages();
  }

}
