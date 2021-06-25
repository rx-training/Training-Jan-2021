using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class BookingCrudRepository : IBookingCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        private readonly IEmailSender emailsend;
        public BookingCrudRepository(ANGULARSPICEJETContext context, IEmailSender emailsend)
        {
            this.context = context;
            this.emailsend = emailsend;
        }

        public void DeleteBooking(string PNRNumber)
        {
            var data = context.BookingFlights.SingleOrDefault(s=>s.Pnrnumber==PNRNumber);
            context.BookingFlights.Remove(data);
            context.SaveChanges();
            var message = new Message(new string[] {data.UserEmail }, "Spicejet Booking Flight ", $"<p style='color:red'>We Are Extremely Sorry The Flight Is Cancel due to Some Issue   Your Refund are Sended on your Bank account As Soon As Possible </p>");
            emailsend.sendMessage(message);
        }

        public IEnumerable<BookingFlight> GetAllBooking()
        {
            return context.BookingFlights;
        }

        public void UpdateBooking(string PNRNumber, BookingFlight booking)
        {
            var data = context.BookingFlights.SingleOrDefault(s => s.Pnrnumber == PNRNumber);
            data.UserFirstName = booking.UserFirstName;
            data.UserMiddleName = booking.UserMiddleName;
            data.UserLastName = booking.UserLastName;
            data.UserPhoneNumber = booking.UserPhoneNumber;
            data.AirPlaneId = booking.AirPlaneId;
            data.CostId = booking.CostId;
            data.TravelId = booking.TravelId;
            context.SaveChanges();
        }
    }
}
