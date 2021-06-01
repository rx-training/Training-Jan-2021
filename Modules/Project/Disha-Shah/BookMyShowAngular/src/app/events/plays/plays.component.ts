import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit {

  playsList: Array<IActivities> = [];

  uniquePlaysList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getPlays(): void{
    this.service.getPlays()
    .subscribe((plays: any[]) => {
      this.playsList = plays,
      console.log(this.playsList), 
      this.uniquePlaysList = this.playsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniquePlaysList)
      this.uniquePlaysList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.playsList.forEach(item => {
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

      console.log(this.uniquePlaysList),
      this.finalList = this.uniquePlaysList.slice(0,10),
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
    this.getPlays();
    this.getLanguages();
  }

}
