import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-all-plays',
  templateUrl: './all-plays.component.html',
  styleUrls: ['./all-plays.component.css']
})
export class AllPlaysComponent implements OnInit {

  playsList: Array<IActivities> = [];

  uniquePlaysList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  price: string = '';
  min: number = 0;
  max: number = 100000;

  changePrice(e: any){
    this.price = e.target.value;
    this.min = parseInt(this.price.split('-')[0]);
    this.max = parseInt(this.price.split('-')[1]);
    this.filterRoute();
  }

  filterRoute(){
    if(this.price == 'Choose Price')
    {
      this.router.navigate(['home/plays']);
      this.getPlays();
    }
    else if(this.price != 'Choose Price'){
      this.router.navigate(['home/plays/filter'], {queryParams: {'price': this.price}});
      this.finalList = this.uniquePlaysList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
    }
  }

  getPlays(): void{
    this.service.getPlays()
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

      this.finalList = this.uniquePlaysList
      console.log(this.uniquePlaysList);
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages,
      console.log(this.languagesList);
    }); 
  }

  constructor(private service: EventsService, private languageService: LanguageService, private router: Router) {
  }

  ngOnInit(): void {
    this.getLanguages();
    this.getPlays();
  }


}
