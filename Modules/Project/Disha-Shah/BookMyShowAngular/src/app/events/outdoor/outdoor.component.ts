import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { LanguageService } from 'src/app/language.service';
import { ILanguages } from 'src/app/models/ILanguages';
import { IOutdoors } from 'src/app/models/IOutdoors';
import { OutdoorService } from '../outdoor.service';

@Component({
  selector: 'app-outdoor',
  templateUrl: './outdoor.component.html',
  styleUrls: ['./outdoor.component.css']
})
export class OutdoorComponent implements OnInit {

  outdoorsList: Array<IOutdoors> = [];

  uniqueOutdoorsList: Array<IOutdoors> = [];

  languagesList: Array<ILanguages> = [];

  showTimes: Array<any> = [];

  getOutdoors(): void{
    this.service.getOutdoors()
    .subscribe((outdoors: any[]) => {
      this.outdoorsList = outdoors,
      console.log(this.outdoorsList), 
      this.uniqueOutdoorsList = this.outdoorsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniqueOutdoorsList)
      this.uniqueOutdoorsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.outdoorsList.forEach(item => {
          if(item.eventId == element.eventId){
            console.log(element.showTimings);
            element.showTimings.push({"showTime": item.showTime});
            element.languages.push({"language": item.language});
            console.log(element.showTimings);

          }
        }) 
      this.showTimes = [...new Set(element.languages.map(i => i.language))];
      console.log('lang' + this.showTimes);
      })

      console.log(this.uniqueOutdoorsList)
      // this.uniqueOutdoorsList.forEach(element => {
      //   element.movieGenres.forEach(e => {
      //     console.log(e.genreId);
      //     this.genresList.forEach(g => {
      //       if(e.genreId == g.genreId){
      //         e.genre=g.genre1
      //       }
      //     })
      //     console.log(e);
      //   })
      // })
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages,
      console.log(this.languagesList);
    }); 
  }

  constructor(private service: OutdoorService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.getOutdoors();
    this.getLanguages();
  }

}
