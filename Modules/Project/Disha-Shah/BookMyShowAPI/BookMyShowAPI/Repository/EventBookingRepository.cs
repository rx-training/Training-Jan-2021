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
        public EventBookingRepository(BookMyShowDBContext context) : base(context)
        {

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
        public void BookEvent(EventBookingDTO eventBookingDTO)
        {
            var json = JsonConvert.SerializeObject(eventBookingDTO);

            var param = new SqlParameter("@jsonBook", json);

            context.Database.ExecuteSqlRaw($"EXECUTE prcEventBook @jsonBook", param);
        }
    }
}
