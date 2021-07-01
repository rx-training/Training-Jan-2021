using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IBookingCrudRepository
    {
        public IEnumerable<BookingFlight> GetAllBooking();
        public  void DeleteBooking(string PNRNumber);
        public void UpdateBooking(string PNRNumber,BookingFlight booking);
    }
}
