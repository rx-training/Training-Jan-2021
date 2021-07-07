using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IUserFlightBookingRepository
    {
        public IEnumerable<UserFlightBookingDetail> GetAllBooking();
        public IEnumerable<UserFlightBookingDetail> GetByPnrNumber(string PnrNumber);
        public void InsertBooking(UserFlightBookingDetail bookingDetail);
        public void UpdateBooking(UserFlightBookingDetail bookingDetail, int UserId);
        public void DeleteBooking(int UserId);
    }
}
