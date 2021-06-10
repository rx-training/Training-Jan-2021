import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventVenuesService } from 'src/app/events/event-venues.service';
import { IEventVenues } from 'src/app/models/IEventVenues';
import { IShowTimings } from 'src/app/models/IShowTimings';
import { ShowTimingsService } from 'src/app/show-timings.service';

@Component({
  selector: 'app-event-venues-detail',
  templateUrl: './event-venues-detail.component.html',
  styleUrls: ['./event-venues-detail.component.css']
})
export class EventVenuesDetailComponent implements OnInit {

  addShowTimingForm;
  removeShowTimingForm;

  allShowTimings: Array<IShowTimings> = [];
  showTimingsList: Array<any> = [];
  addedShowTimings: Array<any> = [];
  notAddedShowTimings: Array<IShowTimings> = [];
  isFound: number = -1;
  eventVenue: any;
  showtime: any;
  id: number = 0;

  getEventVenue(){
    this.id =  parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.eventVenuesService.getShowTimingsByEventVenue(this.id)
    .subscribe(showTimings => {
      this.showTimingsList = showTimings,
      this.eventVenue = showTimings[0],

      this.showTimingsList.forEach(item => {
        this.addedShowTimings.push(item.showTimingId)
      }),

      this.getShowTimings();
    })
  }

  getShowTimings(){
    this.showTimingsService.getShowTimings()
      .subscribe(showTimings => {
        this.allShowTimings = showTimings
        this.allShowTimings.forEach(item => {
            console.log(item.showTime)
            console.log(this.addedShowTimings)
            console.log('isMatch: ' + this.addedShowTimings.indexOf(item.showTimingId))
            this.isFound = this.addedShowTimings.indexOf(item.showTimingId);
            if(this.isFound == -1){
              this.notAddedShowTimings.push(item)
            }
        }),

        console.log(this.notAddedShowTimings)
      })
  }

  showTimingSubmit(){
    console.log(this.addShowTimingForm.value);

    this.addShowTimingForVenue(this.id, '"' + this.addShowTimingForm.value.showTime + '"');

    alert("Showtiming added successfully");

    this.addShowTimingForm.reset();

    window.location.reload();
  }

  addShowTimingForVenue(id: number, showtime: string){
    console.log(id)
    console.log(showtime)
    this.eventVenuesService.addShowTiming(id, showtime)
    .subscribe();
  }

  removeShowTimingSubmit(){
    this.removeShowTimingForVenue(this.id, this.removeShowTimingForm.value.showTime);

    alert("Showtiming removed successfully");

    this.removeShowTimingForm.reset();

    window.location.reload();
  }

  removeShowTimingForVenue(id: number, showtime: string){
    this.eventVenuesService.deleteShowTiming(id, showtime)
    .subscribe();
  }

  constructor(
    private fb: FormBuilder,
    private eventVenuesService: EventVenuesService, 
    private showTimingsService: ShowTimingsService, 
    private route: ActivatedRoute
  ){
    this.addShowTimingForm = this.fb.group({
      showTime: ['', Validators.required]
    });

    this.removeShowTimingForm = this.fb.group({
      showTime: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getEventVenue();
  }

}
