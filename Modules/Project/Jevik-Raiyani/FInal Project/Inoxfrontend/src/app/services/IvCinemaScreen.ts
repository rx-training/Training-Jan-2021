export class IvCinemaScreen{
    showTimeId:number
    movieId:number
    date:Date
    startTime: {
        ticks: number,
        days: number,
        hours: number,
        milliseconds: number,
        minutes: number,
        seconds: number,
        totalDays: number,
        totalHours: number,
        totalMilliseconds: number,
        totalMinutes: number,
        totalSeconds: number
    }
    cinemaName : string
    cinemaAddress:string
    cinemaCity:string
    cinemaPincode:number
    cinemaContactNo:number
    screenId:number
    screenNo:number
    capacity:number
}