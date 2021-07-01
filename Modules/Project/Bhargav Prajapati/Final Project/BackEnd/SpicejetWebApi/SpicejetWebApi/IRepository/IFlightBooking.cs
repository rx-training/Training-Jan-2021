
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetAPI.IRepository
{
    public interface IFlightBooking
    {
        public IEnumerable<BookingFlight> GetAllUser();
        public void InsertUser(BookingFlight booking);
        public Demo GetUserByPnrNumber(string PnrNumber,string Email);
        public void DeleteBooking(string PnrNumber);
        public void UpdateRecord(string PnrNumber, BookingFlight booking);
    }
}
