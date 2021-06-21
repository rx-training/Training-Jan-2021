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
        public async Task BookMovie(MovieBookingDTO movieBookingDTO)
        {
            var json = JsonConvert.SerializeObject(movieBookingDTO);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcBook @jsonBook", param);

            var seats = string.Join(",", movieBookingDTO.SeatNo);
            var totalTickets = 0;
            var totalAmount = 0.0;
            var screen = 0;
            var bookingId = 0;

            var bookingsDone = context.MovieBookings
                                    .Where(x => x.UserContact == movieBookingDTO.UserContact)
                                    .ToList();

            foreach (var item in bookingsDone)
            {
                if(item.Movie == movieBookingDTO.Movie && item.Language == movieBookingDTO.Language && item.City == movieBookingDTO.City && item.DateToWatch == movieBookingDTO.DateToWatch && item.FilmCategory == movieBookingDTO.FilmCategory && item.SeatNo == seats && item.Theatre == movieBookingDTO.Theatre)
                {
                    bookingId = item.MovieBookingId;
                    screen = (int)item.Screen;
                    totalTickets = item.TotalTickets;
                    totalAmount = (double)item.TotalAmount;
                }
            }

            var userEmail = "";
            var users = context.Users;

            foreach (var item in users)
            {
                if(item.ContactNo == movieBookingDTO.UserContact)
                {
                    userEmail = item.Email;
                }

            }

            MailRequest request = new MailRequest();

            request.ToEmail = userEmail;
            request.Subject = $"Booking is successfully done!";
            request.Body = $"<h1>BookMyShow</h1><h2>Booking Id: {bookingId}</h2><h4>Booked Movie: {movieBookingDTO.Movie}</h4><h4>Theatre: {movieBookingDTO.Theatre}, {movieBookingDTO.City}</h4><h4>Show Time: {movieBookingDTO.ShowTiming}</h4><h4>Language: {movieBookingDTO.Language}</h4><h4>Format: {movieBookingDTO.FilmCategory}</h4><h4>Date to watch: {movieBookingDTO.DateToWatch}</h4><h4>Screen: {screen}</h4><h4>Total seats: {totalTickets}</h4><h3>Seat No. {seats}</h3><h3>Amount paid: {totalAmount}</h3>";

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
