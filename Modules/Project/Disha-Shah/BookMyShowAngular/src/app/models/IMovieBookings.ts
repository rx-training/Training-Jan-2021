export interface IMovieBookings{
    movieBookingId?: number;
    bookingDate: string;
    movieId: number;
    userId: number;
    seatNo: string;
    theatreId: number;
    screenId: number;
    cityId: number;
    languageId: number;
    filmCategoryId: number;
    showTimingId: number;
    dateToWatch: string;
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
