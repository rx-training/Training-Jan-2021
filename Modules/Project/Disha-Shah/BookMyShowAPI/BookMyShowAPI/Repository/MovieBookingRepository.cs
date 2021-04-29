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
        public MovieBookingRepository(BookMyShowDBContext context) : base(context)
        {

        }

        // Get all movie Bookings
        public IEnumerable GetAllMovieBookings()
        {
            var movieBookings = context.MovieBookings.ToList();

            return movieBookings;
        }

        // Get all movie Bookings based on Contact number
        public IEnumerable GetMovieBookingByContact(string contactno)
        {
            var movieBookings = context.MovieBookings
                                    .Where(x => x.UserContact == contactno)
                                    .ToList();

            return movieBookings;
        }

        // Book a Movie
        public void BookMovie(MovieBookingDTO movieBookingDTO)
        {
            MovieBookingDTO movieBooking = new MovieBookingDTO
            {
                Movie = movieBookingDTO.Movie,
                UserContact = movieBookingDTO.UserContact,
                SeatNo = movieBookingDTO.SeatNo,
                Theatre = movieBookingDTO.Theatre,
                ShowTiming = movieBookingDTO.ShowTiming,
                City = movieBookingDTO.City,
                Language = movieBookingDTO.Language,
                FilmCategory = movieBookingDTO.FilmCategory,
                DateToWatch = movieBookingDTO.DateToWatch
            };
            var json = JsonConvert.SerializeObject(movieBooking);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcBook @jsonBook", param);
        }
    }
}
