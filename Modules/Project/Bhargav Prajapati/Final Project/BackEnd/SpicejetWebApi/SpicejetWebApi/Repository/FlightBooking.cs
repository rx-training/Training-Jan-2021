
using SpicejetAPI.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetAPI.Repository
{
    public class FlightBooking : IFlightBooking
    {
        private readonly ANGULARSPICEJETContext context;

        public FlightBooking(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }

        public void DeleteBooking(string PnrNumber)
        {
            var serchbooking = context.BookingFlights.SingleOrDefault(s => s.Pnrnumber == PnrNumber);
            context.BookingFlights.Remove(serchbooking);
            context.SaveChanges();
        }

        public IEnumerable<BookingFlight> GetAllUser()
        {
            return context.BookingFlights;
        }

        public Demo GetUserByPnrNumber(string PnrNumber, string Email)
        {
            var serchbooking = context.Demos.SingleOrDefault(s => s.Pnrnumber == PnrNumber && s.UserEmail==Email);
            return serchbooking;
        }

        public void InsertUser(BookingFlight booking)
        {
            context.BookingFlights.Add(booking);
            context.SaveChanges();
        }
        public void UpdateRecord(string PnrNumber, BookingFlight booking)
        {
            var serchbooking = context.BookingFlights.SingleOrDefault(s => s.Pnrnumber == PnrNumber);
            serchbooking.UserFirstName = booking.UserFirstName;
            serchbooking.UserMiddleName = booking.UserMiddleName;
            serchbooking.UserLastName = booking.UserLastName;
            serchbooking.UserEmail = booking.UserEmail;
            serchbooking.UserPhoneNumber = booking.UserPhoneNumber;
            context.SaveChanges();
        }
    }
}
