using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.IRepository
{
    public interface IViewFlightBookingRepository
    {
        public IEnumerable<VBookingFlightDetail> GetviewAllBooking();
        public IEnumerable<VBookingFlightDetail> GetviewBookingByPnrNumber(string PnrNumber);

    }
}
