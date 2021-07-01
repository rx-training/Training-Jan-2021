export class IShowTime{
    showTimeId?:number
    movieId:number
    screenId:number
    date:Date
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
}
