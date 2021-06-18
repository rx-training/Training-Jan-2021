import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { LanguageService } from 'src/app/language.service';
import { ILanguages } from 'src/app/models/ILanguages';
import { IActivities } from 'src/app/models/IActivities';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {

  outdoorsList: Array<IActivities> = [];

  uniqueOutdoorsList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getOutdoors(): void{
    this.service.getOutdoors()
    .subscribe((outdoors: any[]) => {
      this.outdoorsList = outdoors,
      this.uniqueOutdoorsList = this.outdoorsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniqueOutdoorsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.outdoorsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniqueOutdoorsList.slice(0,10)
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
    this.getOutdoors();
    this.getLanguages();
  }

}
