export interface IMovieBookings{
    movieBookingId?: number;
    bookingDate: Date;
    movieId: number;
    userId: number;
    seatNo: string;
    theatreId: number;
    screenId: number;
    cityId: number;
    languageId: number;
    filmCategoryId: number;
    showTimingId: number;
    dateToWatch: Date;
    totalTickets: number;
    totalAmount: number;
    movie?: any;
    user?: any;
    theatre?: any;
    showTiming?: any;
    screen?: any;
    city?: any;
    language?: any;
    filmCategory?: any;
}
