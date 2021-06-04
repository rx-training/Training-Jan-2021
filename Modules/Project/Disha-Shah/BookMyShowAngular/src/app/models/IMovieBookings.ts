export interface IMovieBookings{
    movieBookingId?: number;
    bookingDate: Date;
    movie: string;
    userContact: number;
    seatNo: string;
    theatre: string;
    showTiming: any;
    totalAmount: number;
    screen: number;
    city: string;
    language: string;
    filmCategory: string;
    dateToWatch: Date;
    totalTickets: number;
}
/*
{
    "movieBookingId": 126,
    "bookingDate": "2021-04-01T00:00:00",
    "movie": "Monster Hunter",
    "userContact": "9429410249",
    "seatNo": "C1,C2,B1",
    "theatre": "Cineplex",
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
    "totalAmount": 500,
    "screen": 1,
    "city": "Ahmedabad",
    "language": "Hindi",
    "filmCategory": "2D",
    "dateToWatch": "2021-04-05T00:00:00",
    "totalTickets": 3
  }
 */