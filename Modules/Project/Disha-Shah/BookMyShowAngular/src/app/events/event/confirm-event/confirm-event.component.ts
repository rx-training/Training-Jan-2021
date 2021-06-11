import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/language.service';
import { IActivities } from 'src/app/models/IActivities';
import { IEventBookings } from 'src/app/models/IEventBookings';
import { ILanguages } from 'src/app/models/ILanguages';
import { IUser } from 'src/app/models/IUser';
import { UserService } from 'src/app/movies/user.service';
import { EventBookingService } from '../../event-booking.service';
import { EventsService } from '../../events.service';

@Component({
  selector: 'app-confirm-event',
  templateUrl: './confirm-event.component.html',
  styleUrls: ['./confirm-event.component.css']
})
export class ConfirmEventComponent implements OnInit {

  eventsList: Array<IActivities> = [];
  events: Array<IActivities> = [];
  event: IActivities = {address: "", city: "", cityId: 0, dateOfEvent: new Date(), event: "", eventId: 0, eventType: "", eventTypeId: 0, eventVenue: "", eventVenueId: 0, eventVenueShowTimingId: 0, image: "", language: "", languageId: 0, languages: [], showTime: "", showTimingId: 0, showTimings: [], ticketPrice: 0, time:"", totalTickets: 0};
  uniqueEventsList: Array<any> = [];
  eventBgImg: string = '';
  languagesList: Array<ILanguages> = [];
  languages: Array<any> = [];
  minAge: number = 0;
  dateToWatch: string = '';
  note: string = '';
  about: string = '';
  disclaimer: string = '';
  termsConditions: string = '';
  numberOfSeats: number = 0;
  totalAmount: number = 0;
  showTime: string = '';

  usersList: Array<IUser> = [];
  userContact: string = '';
  userInfo: any;
  userName: string = '';

  getEvents(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.numberOfSeats = parseInt(this.route.snapshot.paramMap.get('numberOfSeats'), 10);
    this.eventsService.getEvent(id)
    .subscribe(events => {
      this.eventsList = events
      
      this.events = this.eventsList.filter((thing, i, arr) => arr.findIndex(t => t.eventId == thing.eventId) == i),
      this.events.forEach(element => {
        element.showTimings = [];
        element.languages = [];
        this.languages = [];
        this.eventsList.forEach(item => {
          if(item.eventId == element.eventId){
            element.showTimings.push({"showTime": item.showTime, "showTimeId": item.showTimingId});
            this.languages.push({"language": item.language});

          }
        }) 
      element.languages = [...new Set(this.languages.map(i => i.language))]
      })

      this.event = this.events[0];
      this.totalAmount = this.numberOfSeats * this.event.ticketPrice;
      this.showTime=this.event.showTime.hours + ':' + this.event.showTime.minutes;
      
      console.log(this.events)
      console.log(this.event)
      console.log(this.eventsList)
    })
  }

  getUniqueEvents(){
    this.eventsService.getUniqueEvents()
    .subscribe(events => {
      this.uniqueEventsList = events,
      console.log(this.uniqueEventsList)

      this.uniqueEventsList.forEach(item => {
        if(item.eventId == this.event.eventId){
          this.eventBgImg = item.backgroundImage
          this.minAge = item.minAge
          this.dateToWatch = new Date(this.event.dateOfEvent).getFullYear() + '-' + (new Date(this.event.dateOfEvent).getMonth() + 1) + '-' + new Date(this.event.dateOfEvent).getDate()
          this.note = item.note
          this.about = item.about
          this.disclaimer = item.disclaimer
          this.termsConditions = item.termsAndConditions
        }
      })

    })
  }

  getLanguages(): void{
    this.languageService.getLanguages()
    .subscribe((languages: any[]) => {
      this.languagesList = languages
    }); 
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(users => {
      this.usersList = users,
      this.userInfo = JSON.parse(localStorage.getItem("logged_in_user"))
      this.userName = this.userInfo.username
      this.usersList.forEach(element => {
        if(element.userName == this.userName){
          this.userContact = element.contactNo
        }
      })
    })
  }

  addBookings(bookings: any): void {
    this.eventBookingsService.addEventBooking(bookings)
      .subscribe();
  }

  doBooking(){
    let newBooking: any = {
      "dateOfEvent": this.event.dateOfEvent,
      "event": this.event.event,
      "eventType": this.event.eventType,
      "eventVenue": this.event.eventVenue,
      "showTiming": this.showTime,
      "ticketCount": this.numberOfSeats.toString(),
      "userContact": this.userContact
    }

    console.log(newBooking);

    this.addBookings(newBooking);
    alert("Successfully completed booking, ticket has been send to you on email");

    this.router.navigate(['/bookinghistory']);
  }

  constructor(private eventsService: EventsService, private languageService: LanguageService, private route: ActivatedRoute, private router: Router, private eventBookingsService: EventBookingService, private userService: UserService) { }

  ngOnInit(): void {
    this.getEvents();
    this.getUniqueEvents();
    this.getLanguages();
    this.getUsers();
  }

}
