export interface IComedies{
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
}
