export interface IEventBookings{
    eventBookingId?: number;
    bookingDate: Date;
    ticketCount: number;
    event: string;
    userContact: string;
    eventVenue: string;
    showTiming: any;
    totalAmount: number;
    eventType: string;
    dateOfEvent: string;
    image?: string;
    dateOfShow?: string;
}

/*
"eventBookingId": 7,
        "bookingDate": "2021-06-06T00:00:00",
        "ticketCount": 2,
        "event": "Sunday Brunch at the Nine Restaurant",
        "userContact": "7984430171",
        "eventVenue": "Snow World: Ahmedabad",
        "showTiming": {
            "ticks": 540000000000,
            "days": 0,
            "hours": 15,
            "milliseconds": 0,
            "minutes": 0,
            "seconds": 0,
            "totalDays": 0.625,
            "totalHours": 15,
            "totalMilliseconds": 54000000,
            "totalMinutes": 900,
            "totalSeconds": 54000
        },
        "totalAmount": 4000.0000,
        "eventType": "Food & Drinks",
        "dateOfEvent": "2021-02-14T00:00:00"
 */