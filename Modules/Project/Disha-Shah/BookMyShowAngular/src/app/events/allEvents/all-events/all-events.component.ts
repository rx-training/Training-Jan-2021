import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent implements OnInit, OnDestroy {

  eventsList: Array<IActivities> = [];

  outdoorsList: Array<IActivities> = [];

  comediesList: Array<IActivities> = [];

  popularsList: Array<IActivities> = [];

  uniqueEventsList: Array<IActivities> = [];

  uniqueOutdoorsList: Array<IActivities> = [];

  uniqueComediesList: Array<IActivities> = [];

  uniquePopularsList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  category: string = '';
  price: string = '';
  min: number = 0;
  max: number = 100000;

  constructor(private service: EventsService, private languageService: LanguageService, private router: Router) {
  }

  ngOnInit(): void {
    this.getComedies();
    this.getOutdoors();
    this.getPopulars();
    this.getLanguages();
    this.getEvents();
  }

  ngOnDestroy(){
    this.getComedies();
    this.getOutdoors();
    this.getPopulars();
    this.getLanguages();
    this.getEvents();
  }

  changeCategory(e: any) {
    this.category = e.target.value;
    this.filterRoute();
  }

  changePrice(e: any){
    this.price = e.target.value;
    this.min = parseInt(this.price.split('-')[0]);
    this.max = parseInt(this.price.split('-')[1]);
    this.filterRoute();
  }

  filterRoute(){
    if((this.category == 'Choose Category' && this.price == 'Choose Price') || (this.category == '' && this.price == 'Choose Price') || (this.category == 'Choose Category' && this.price == ''))
    {
      this.router.navigate(['home/events']);
      this.getEvents();
    }
    else if(this.category != 'Choose Category' || this.price != 'Choose Price'){
      this.router.navigate(['home/events/filter'], {queryParams: {'category': this.category, 'price': this.price}});
      if(this.category == 'Choose Category' || this.category == ''){
        this.getEventsByPrice(this.min, this.max);
      }
      else if(this.price == 'Choose Price' || this.price == ''){
        if(this.category == 'Outdoors'){
          this.getOutdoors();
        }
        else if(this.category == 'Comedy'){
          this.getComedies();
        }
        else if(this.category == 'Populars'){
          this.getPopulars();
        }
      }
      else{
        if(this.category == 'Outdoors'){
          this.uniqueEventsList = this.uniqueOutdoorsList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
        }
        else if(this.category == 'Comedy'){
          this.uniqueEventsList = this.uniqueComediesList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
        }
        else if(this.category == 'Populars'){
          this.uniqueEventsList = this.uniquePopularsList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
        }
      }
    }
  }

  getEventsByPrice(min: number, max: number){
    const outdoorsPriceList = this.uniqueOutdoorsList.filter(x => x.ticketPrice>=min && x.ticketPrice<=max);
    const comediesPriceList = this.uniqueComediesList.filter(x => x.ticketPrice>=min && x.ticketPrice<=max);
    const popularsPriceList = this.uniquePopularsList.filter(x => x.ticketPrice>=min && x.ticketPrice<=max);

    this.uniqueEventsList = outdoorsPriceList.concat(comediesPriceList, popularsPriceList).filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i);
    console.log(this.uniqueEventsList);
  }

  getEvents(): void{
    this.service.getEvents()
    .subscribe(() => {
      this.eventsList = this.eventsList.concat(this.comediesList, this.outdoorsList, this.popularsList)
      console.log(this.eventsList)
      this.uniqueEventsList = this.eventsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i)
      console.log(this.uniqueEventsList)
    })
  }

  getOutdoors(): void{
    this.service.getOutdoors()
    .subscribe((outdoors: any[]) => {
      this.outdoorsList = outdoors,
      console.log(this.outdoorsList), 
      this.uniqueOutdoorsList = this.outdoorsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniqueOutdoorsList),
      this.uniqueOutdoorsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.outdoorsList.forEach(item => {
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

      this.uniqueEventsList = this.uniqueOutdoorsList
      console.log(this.uniqueOutdoorsList)
    });  
  }

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

      this.uniqueEventsList = this.uniqueComediesList
      console.log(this.uniqueComediesList)
      
    });  
  }

  getPopulars(): void{
    this.service.getPopulars()
    .subscribe((populars: any[]) => {
      this.popularsList = populars,
      console.log(this.popularsList), 
      this.uniquePopularsList = this.popularsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      console.log(this.uniquePopularsList)
      this.uniquePopularsList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.popularsList.forEach(item => {
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

      this.uniqueEventsList = this.uniquePopularsList
      console.log(this.uniquePopularsList)
      
    });  
  }


  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

}
