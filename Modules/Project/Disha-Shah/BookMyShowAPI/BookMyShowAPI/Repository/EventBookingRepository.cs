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
    public class EventBookingRepository : GenericRepository<EventBookingDTO>, IEventBooking
    {
        private IMailService mailService;

        public EventBookingRepository(BookMyShowDBContext context, IMailService mailService) : base(context)
        {
            this.mailService = mailService;
        }

        // Get all EventBookings
        public IEnumerable GetAllEventBookings()
        {
            var eventBookings = context.EventBookings.ToList();

            return eventBookings;
        }

        // Get all EventBookings based on Contact number
        public IEnumerable GetEventBookingByContact(string contactno)
        {
            var eventBookings = context.EventBookings
                                    .Where(x => x.UserContact == contactno)
                                    .ToList();

            return eventBookings;
        }

        // Book a Event
        public async Task BookEvent(EventBookingDTO eventBookingDTO)
        {
            var json = JsonConvert.SerializeObject(eventBookingDTO);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcEventBook @jsonBook", param);

            var totalAmount = 0.0;
            var bookingId = 0;

            var bookingsDone = context.EventBookings
                                    .Where(x => x.UserContact == eventBookingDTO.UserContact)
                                    .ToList();

            foreach (var item in bookingsDone)
            {
                if (item.DateOfEvent == eventBookingDTO.DateOfEvent && item.Event == eventBookingDTO.Event && item.EventType == eventBookingDTO.EventType && item.EventVenue == eventBookingDTO.EventVenue && item.TicketCount == Convert.ToByte(eventBookingDTO.TicketCount))
                {
                    bookingId = item.EventBookingId;
                    totalAmount = (double)item.TotalAmount;
                }
            }

            var userEmail = "";
            var users = context.Users;

            foreach (var item in users)
            {
                if (item.ContactNo == eventBookingDTO.UserContact)
                {
                    userEmail = item.Email;
                }

            }

            MailRequest request = new MailRequest();

            request.ToEmail = userEmail;
            request.Subject = $"Booking is successfully done!";
            request.Body = $"<h1>BookMyShow</h1><h2>Booking Id: {bookingId}</h2><h4>Booked Event: {eventBookingDTO.Event}</h4><h4>Event Type: {eventBookingDTO.EventType}</h4><h4>Event Venue: {eventBookingDTO.EventVenue}</h4><h4>Show Time: {eventBookingDTO.ShowTiming}</h4><h4>Date of Event: {eventBookingDTO.DateOfEvent}</h4><h3>Total tickets: {eventBookingDTO.TicketCount}</h3><h3>Amount paid: {totalAmount}</h3>";

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
