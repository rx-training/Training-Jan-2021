using BookMyShowAPI.Authentication;
using BookMyShowAPI.IRepository;
using BookMyShowAPI.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookMyShowAPI.Repository
{
    public class MovieBookingRepository : GenericRepository<MovieBookingDTO>, IMovieBooking
    {
        private IMailService mailService;

        public MovieBookingRepository(BookMyShowDBContext context, IMailService mailService) : base(context)
        {
            this.mailService = mailService;
        }

        // Get all movie Bookings
        public IEnumerable GetAllMovieBookings()
        {
            var movieBookings = context.MovieBookings
                                        .Where(x => x.Movie.IsActive == true);

            var m = from x in movieBookings
                    select new MovieBooking
                    {
                        BookingDate = x.BookingDate,
                        DateToWatch = x.DateToWatch,
                        MovieBookingId = x.MovieBookingId,
                        SeatNo = x.SeatNo,
                        TotalAmount = x.TotalAmount,
                        TotalTickets = x.TotalTickets,
                        City = context.Cities.SingleOrDefault(p => p.CityId == x.CityId),
                        CityId = x.CityId,
                        FilmCategory = context.FilmCategories.SingleOrDefault(p => p.FilmCategoryId == x.FilmCategoryId),
                        FilmCategoryId = x.FilmCategoryId,
                        Language = context.Languages.SingleOrDefault(p => p.LanguageId == x.LanguageId),
                        LanguageId = x.LanguageId,
                        Movie = context.Movies.SingleOrDefault(p => p.MovieId == x.MovieId),
                        MovieId = x.MovieId,
                        Screen = context.Screens.SingleOrDefault(p => p.ScreenId == x.ScreenId),
                        ScreenId = x.ScreenId,
                        ShowTiming = context.ShowTimings.SingleOrDefault(p => p.ShowTimingId == x.ShowTimingId),
                        ShowTimingId = x.ShowTimingId,
                        //Theatre = context.Theatres.SingleOrDefault(p => p.TheatreId == x.TheatreId),
                        TheatreId = x.TheatreId,
                        User = context.Users.SingleOrDefault(p => p.UserId == x.UserId),
                        UserId = x.UserId

                    };

            return m;
        }

        // Get all movie Bookings based on Contact number
        public IEnumerable GetMovieBookingByContact(string contactno)
        {
            var movieBookings = context.MovieBookings
                                    .Where(x => x.User.ContactNo == contactno && x.Movie.IsActive == true);

            var m = from x in movieBookings
                    select new MovieBooking
                    {
                        BookingDate = x.BookingDate,
                        DateToWatch = x.DateToWatch,
                        MovieBookingId = x.MovieBookingId,
                        SeatNo = x.SeatNo,
                        TotalAmount = x.TotalAmount,
                        TotalTickets = x.TotalTickets,
                        City = context.Cities.SingleOrDefault(p => p.CityId == x.CityId),
                        CityId = x.CityId,
                        FilmCategory = context.FilmCategories.SingleOrDefault(p => p.FilmCategoryId == x.FilmCategoryId),
                        FilmCategoryId = x.FilmCategoryId,
                        Language = context.Languages.SingleOrDefault(p => p.LanguageId == x.LanguageId),
                        LanguageId = x.LanguageId,
                        Movie = context.Movies.SingleOrDefault(p => p.MovieId == x.MovieId),
                        MovieId = x.MovieId,
                        Screen = context.Screens.SingleOrDefault(p => p.ScreenId == x.ScreenId),
                        ScreenId = x.ScreenId,
                        ShowTiming = context.ShowTimings.SingleOrDefault(p => p.ShowTimingId == x.ShowTimingId),
                        ShowTimingId = x.ShowTimingId,
                        //Theatre = context.Theatres.SingleOrDefault(p => p.TheatreId == x.TheatreId),
                        TheatreId = x.TheatreId,
                        User = context.Users.SingleOrDefault(p => p.UserId == x.UserId),
                        UserId = x.UserId

                    };

            return m;
        }

        // Book a Movie
        public async Task BookMovie(MovieBookingDTO movieBookingDTO)
        {
            var json = JsonConvert.SerializeObject(movieBookingDTO);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcBook @jsonBook", param);

            var seats = string.Join(",", movieBookingDTO.SeatNo);
            var totalTickets = movieBookingDTO.SeatNo.Length;
            var totalAmount = 0.0;
            var screen = 0;
            var bookingId = 0;
            City city;
            FilmCategory filmCategory;
            Language language;
            Movie movie;
            Theatre theatre;
            ShowTiming showTiming;

            var bookingsDone = context.MovieBookings
                                    .Where(x => x.User.ContactNo == movieBookingDTO.UserContact)
                                    .ToList();

            foreach (var item in bookingsDone)
            {
                city = context.Cities.SingleOrDefault(x => x.Name == movieBookingDTO.City);
                filmCategory = context.FilmCategories.SingleOrDefault(x => x.FilmCategory1 == movieBookingDTO.FilmCategory);
                language = context.Languages.SingleOrDefault(x => x.Language1 == movieBookingDTO.Language);
                movie = context.Movies.SingleOrDefault(x => x.Name == movieBookingDTO.Movie);
                theatre = context.Theatres.SingleOrDefault(x => x.Name == movieBookingDTO.Theatre);
                TimeSpan ts = DateTime.Parse(movieBookingDTO.ShowTiming).TimeOfDay;
                showTiming = context.ShowTimings.SingleOrDefault(x => x.ShowTime == ts);
                
                if (item.MovieId == movie.MovieId && item.LanguageId == language.LanguageId && item.CityId == city.CityId && item.DateToWatch == movieBookingDTO.DateToWatch && item.FilmCategoryId == filmCategory.FilmCategoryId && item.SeatNo == seats && item.TheatreId == theatre.TheatreId && item.ShowTimingId == showTiming.ShowTimingId)
                {
                    bookingId = item.MovieBookingId;
                    screen = (int)item.ScreenId;
                    totalAmount = (double)item.TotalAmount;
                }
            }

            var userEmail = "";
            var users = context.Users;

            foreach (var item in users)
            {
                if (item.ContactNo == movieBookingDTO.UserContact)
                {
                    userEmail = item.Email;
                }

            }

            var dateToWatch = Convert.ToString(movieBookingDTO.DateToWatch.Year) + '-' + Convert.ToString(movieBookingDTO.DateToWatch.Month) + '-' + Convert.ToString(movieBookingDTO.DateToWatch.Day);

            MailRequest request = new MailRequest();

            request.ToEmail = userEmail;
            request.Subject = $"Booking is successfully done!";
            request.Body = $"<h1>BookMyShow</h1><h2>Movie Booked Successfully</h2><h2>Booking Id: {bookingId}</h2><h4>Booked Movie: {movieBookingDTO.Movie}</h4><h4>Theatre: {movieBookingDTO.Theatre}, {movieBookingDTO.City}</h4><h4>Show Time: {movieBookingDTO.ShowTiming}</h4><h4>Language: {movieBookingDTO.Language}</h4><h4>Format: {movieBookingDTO.FilmCategory}</h4><h4>Date to watch: {dateToWatch}</h4><h4>Screen: {screen}</h4><h4>Total seats: {totalTickets}</h4><h3>Seat No. {seats}</h3><h3>Amount paid: {totalAmount}</h3>";

            try
            {
                mailService.SendEmailAsync(request);
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
