export interface IOutdoors{
    eventId: number;
    event: string;
    image: string;
    ticketPrice: number;
    time: string;
    dateOfEvent: Date;
    eventTypeId: number;
    eventType: string;
    eventVenueShowTimingId: number;
    eventVenueId: number;
    eventVenue: string;
    address: string;
    totalTickets: number;
    cityId: number;
    city: string;
    showTime: any,
    showTimingId: number,
    languageId: number,
    language: string,
    showTimings: Array<any>
    languages: Array<any>
}

/*
"eventId": 7,
    "event": "Oh Hello - A Stand-up Comedy Show by Rahul Dua",
    "image": "images/recommendedmovie-3.jpg",
    "ticketPrice": 5000,
    "time": "1h 30m",
    "dateOfEvent": "2021-02-14T00:00:00",
    "eventTypeId": 6,
    "eventType": "Standup Comedy",
    "eventVenueShowTimingId": 8,
    "eventVenueId": 3,
    "eventVenue": "Online Streaming",
    "address": "On BookMyShow",
    "totalTickets": 100,
    "cityId": 7,
    "city": "Chennai",
    "showTime": {
      "ticks": 639000000000,
      "days": 0,
      "hours": 17,
      "milliseconds": 0,
      "minutes": 45,
      "seconds": 0,
      "totalDays": 0.7395833333333334,
      "totalHours": 17.75,
      "totalMilliseconds": 63900000,
      "totalMinutes": 1065,
      "totalSeconds": 63900
    },
    "showTimingId": 2,
    "languageId": 2,
    "language": "Hindi"
 */