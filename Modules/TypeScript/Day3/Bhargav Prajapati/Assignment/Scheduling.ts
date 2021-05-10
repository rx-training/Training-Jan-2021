namespace Scheduling
{
    export interface IScheduling
    {
        TimeSlot:string;
        Address:string;
        Date:string;

    }

      export  var Schedulingdata:IScheduling[]=
    [
        {TimeSlot:"12:30 PM",Address:"Ahmedabad",Date:"12/11/2020"},
        {TimeSlot:"10:30 AM",Address:"Surat",Date:"25/11/2020"},
        {TimeSlot:"08:30 AM",Address:"Baroda",Date:"27/11/2020"},
        {TimeSlot:"08:30 AM",Address:"Mumbai",Date:"12/11/2020"}
    ]
}