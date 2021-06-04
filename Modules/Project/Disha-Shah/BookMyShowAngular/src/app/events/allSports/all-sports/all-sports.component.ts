import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-all-sports',
  templateUrl: './all-sports.component.html',
  styleUrls: ['./all-sports.component.css']
})
export class AllSportsComponent implements OnInit {

  sportsList: Array<IActivities> = [];

  uniqueSportsList: Array<IActivities> = [];

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
      this.router.navigate(['home/sports']);
      this.getSports();
    }
    else if(this.price != 'Choose Price'){
      this.router.navigate(['home/sports/filter'], {queryParams: {'price': this.price}});
      this.finalList = this.uniqueSportsList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
    }
  }

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

      this.finalList = this.uniqueSportsList
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
    this.getSports();
  }


}
