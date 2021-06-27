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
            var eventBookings = context.EventBookings
                                    .Where(x => x.Event.IsActive == true);

            var m = from x in eventBookings
                    select new EventBooking
                    {
                        BookingDate = x.BookingDate,
                        EventBookingId = x.EventBookingId,
                        EventId = x.EventId,
                        //Event = context.Events.SingleOrDefault(p => p.EventId == x.EventId),
                        EventType = context.EventTypes.SingleOrDefault(p => p.EventTypeId == x.EventTypeId),
                        EventTypeId = x.EventTypeId,
                        EventVenue = context.EventVenues.SingleOrDefault(p => p.EventVenueId == x.EventVenueId),
                        EventVenueId = x.EventVenueId,
                        TicketCount = x.TicketCount,
                        TotalAmount = x.TotalAmount,
                        ShowTiming = context.ShowTimings.SingleOrDefault(p => p.ShowTimingId == x.ShowTimingId),
                        ShowTimingId = x.ShowTimingId,
                        User = context.Users.SingleOrDefault(p => p.UserId == x.UserId),
                        UserId = x.UserId

                    };

            return m;
        }

        // Get all EventBookings based on Contact number
        public IEnumerable GetEventBookingByContact(string contactno)
        {
            var eventBookings = context.EventBookings
                                    .Where(x => x.User.ContactNo == contactno && x.Event.IsActive == true && x.EventVenue.IsActive == true);

            var m = from x in eventBookings
                    select new EventBooking
                    {
                        BookingDate = x.BookingDate,
                        EventBookingId = x.EventBookingId,
                        EventId = x.EventId,
                        //Event = context.Events.SingleOrDefault(p => p.EventId == x.EventId),
                        EventType = context.EventTypes.SingleOrDefault(p => p.EventTypeId == x.EventTypeId),
                        EventTypeId = x.EventTypeId,
                        EventVenue = context.EventVenues.SingleOrDefault(p => p.EventVenueId == x.EventVenueId),
                        EventVenueId = x.EventVenueId,
                        TicketCount = x.TicketCount,
                        TotalAmount = x.TotalAmount,
                        ShowTiming = context.ShowTimings.SingleOrDefault(p => p.ShowTimingId == x.ShowTimingId),
                        ShowTimingId = x.ShowTimingId,
                        User = context.Users.SingleOrDefault(p => p.UserId == x.UserId),
                        UserId = x.UserId

                    };

            return m;
        }

        // Book a Event
        public async Task BookEvent(EventBookingDTO eventBookingDTO)
        {
            var json = JsonConvert.SerializeObject(eventBookingDTO);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcEventBook @jsonBook", param);

            var totalAmount = 0.0;
            var bookingId = 0;
            DateTime dateOfEvent;
            Event events;
            EventVenue eventVenue;
            ShowTiming showTiming;
            EventType eventType;

            var bookingsDone = context.EventBookings
                                    .Where(x => x.User.ContactNo == eventBookingDTO.UserContact)
                                    .ToList();

            foreach (var item in bookingsDone)
            {
                events = context.Events.SingleOrDefault(x => x.Name == eventBookingDTO.Event);
                dateOfEvent = events.DateOfEvent;
                eventVenue = context.EventVenues.SingleOrDefault(x => x.Name == eventBookingDTO.EventVenue);
                TimeSpan ts = DateTime.Parse(eventBookingDTO.ShowTiming).TimeOfDay;
                showTiming = context.ShowTimings.SingleOrDefault(x => x.ShowTime == ts);
                eventType = context.EventTypes.SingleOrDefault(x => x.EventType1 == eventBookingDTO.EventType);

                if (item.EventId == events.EventId && item.EventTypeId == eventType.EventTypeId && item.EventVenueId == eventVenue.EventVenueId && item.TicketCount == Convert.ToByte(eventBookingDTO.TicketCount) && item.ShowTimingId == showTiming.ShowTimingId)
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

            var dateToWatch = Convert.ToString(eventBookingDTO.DateOfEvent.Year) + '-' + Convert.ToString(eventBookingDTO.DateOfEvent.Month) + '-' + Convert.ToString(eventBookingDTO.DateOfEvent.Day);

            MailRequest request = new MailRequest();

            request.ToEmail = userEmail;
            request.Subject = $"Booking is successfully done!";
            request.Body = $"<h1>BookMyShow</h1><h2>Booking Id: {bookingId}</h2><h4>Booked Event: {eventBookingDTO.Event}</h4><h4>Event Type: {eventBookingDTO.EventType}</h4><h4>Event Venue: {eventBookingDTO.EventVenue}</h4><h4>Show Time: {eventBookingDTO.ShowTiming}</h4><h4>Date of Event: {dateToWatch}</h4><h3>Total tickets: {eventBookingDTO.TicketCount}</h3><h3>Amount paid: {totalAmount}</h3>";

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
