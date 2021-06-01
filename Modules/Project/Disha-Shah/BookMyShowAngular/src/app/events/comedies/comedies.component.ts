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
      console.log(this.comediesList), 
      this.uniqueComediesList = this.comediesList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniqueComediesList)
      this.uniqueComediesList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.comediesList.forEach(item => {
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

      console.log(this.uniqueComediesList),
      this.finalList = this.uniqueComediesList.slice(0,10),
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
    this.getComedies();
    this.getLanguages();
  }

}
