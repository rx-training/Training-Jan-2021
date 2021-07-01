export interface IEventBookings{
    eventBookingId?: number;
    bookingDate: string;
    ticketCount: number;
    eventId: number;
    userId: number;
    eventVenueId: number;
    showTimingId: number;
    totalAmount: number;
    eventTypeId: number;
    event?: any;
    user?: any;
    eventVenue?: any;
    showTiming?: any;
    eventType?: any;
}
