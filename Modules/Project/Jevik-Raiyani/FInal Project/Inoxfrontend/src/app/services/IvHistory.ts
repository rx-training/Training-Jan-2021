export class IvHistory{
    ticketId?:number
    showDate:Date
    startTime: {
        ticks?: number,
        days?: number,
        hours?: number,
        milliseconds?: number,
        minutes?: number,
        seconds?: number,
        totalDays?: number,
        totalHours?: number,
        totalMilliseconds?: number,
        totalMinutes?: number,
        totalSeconds?: number
    }
    cinemaName?:string
    cinemaCity:string
    movieName?:string
    language:string
    duration?:number
    rowNo:number
    seatNo?:number
    price:number
    name?:string
    bookingDate:Date
    userGmail: string
}