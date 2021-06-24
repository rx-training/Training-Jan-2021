import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { ILanguages } from 'src/app/models/ILanguages';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css']
})
export class AllActivitiesComponent implements OnInit, OnDestroy {

  activitiesList: Array<IActivities> = [];

  uniqueActivitiesList: Array<IActivities> = [];

  finalList: Array<IActivities> = [];

  languagesList: Array<ILanguages> = [];

  languages: Array<any> = [];

  price: string = '';
  min: number = 0;
  max: number = 100000;

  constructor(private service: EventsService, private languageService: LanguageService, private router: Router) {
  }

  ngOnInit(): void {
    this.getLanguages();
    this.getActivities();
  }

  ngOnDestroy(){
    this.getLanguages();
    this.getActivities();
  }

  changePrice(e: any){
    this.price = e.target.value;
    this.min = parseInt(this.price.split('-')[0]);
    this.max = parseInt(this.price.split('-')[1]);
    this.filterRoute();
  }

  filterRoute(){
    if(this.price == 'Choose Price')
    {
      this.router.navigate(['home/activities']);
      this.getActivities();
    }
    else if(this.price != 'Choose Price'){
      this.router.navigate(['home/activities/filter'], {queryParams: {'price': this.price}});
      this.finalList = this.uniqueActivitiesList.filter(x => x.ticketPrice>=this.min && x.ticketPrice<=this.max);
    }
  }

  getActivities(): void{
    this.service.getActivities()
    .subscribe((activities: any[]) => {
      this.activitiesList = activities,
      this.uniqueActivitiesList = this.activitiesList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.uniqueActivitiesList.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.activitiesList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))];
      })

      this.finalList = this.uniqueActivitiesList
    });  
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages,
      console.log(this.languagesList);
    }); 
  }

}
