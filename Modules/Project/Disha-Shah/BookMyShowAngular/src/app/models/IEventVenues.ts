export interface IEventVenues{
    eventVenueId?: number;
    name: string;
    address: string;
    totalTickets: number;
    cityId: number;
    city?: any;
    eventVenueShowTimings?: Array<any>;
}