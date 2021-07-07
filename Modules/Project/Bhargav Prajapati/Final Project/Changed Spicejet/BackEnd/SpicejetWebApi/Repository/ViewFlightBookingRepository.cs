using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class ViewFlightBookingRepository : IViewFlightBookingRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public ViewFlightBookingRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public IEnumerable<VBookingFlightDetail> GetviewAllBooking()
        {
            var data = context.VBookingFlightDetails;
            return data;
        }

        public IEnumerable<VBookingFlightDetail> GetviewBookingByPnrNumber(string PnrNumber)
        {
            var data = context.VBookingFlightDetails.Where(s=>s.PnrNumber==PnrNumber);
            return data;
        }
    }
}
