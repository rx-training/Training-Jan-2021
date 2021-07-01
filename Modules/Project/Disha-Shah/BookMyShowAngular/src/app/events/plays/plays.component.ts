import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-plays',
  templateUrl: './plays.component.html',
  styleUrls: ['./plays.component.css']
})
export class PlaysComponent implements OnInit, OnDestroy {

  playsList: Array<IActivities> = [];

  uniquePlaysList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  getAllPlaysSub: Subscription;
  getAllLanguagesSub: Subscription;

  constructor(private service: EventsService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getPlays();
    this.getLanguages();
  }

  ngOnDestroy(){
    this.getAllPlaysSub.unsubscribe();
    this.getAllLanguagesSub.unsubscribe();
  }

  getPlays(): void{
    this.getAllPlaysSub = this.service.getPlays()
    .subscribe((plays: any[]) => {
      this.playsList = plays,
      this.uniquePlaysList = this.playsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniquePlaysList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.playsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniquePlaysList.slice(0,10)
    });  
  }

  getLanguages(): void{
    this.getAllLanguagesSub = this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

}
