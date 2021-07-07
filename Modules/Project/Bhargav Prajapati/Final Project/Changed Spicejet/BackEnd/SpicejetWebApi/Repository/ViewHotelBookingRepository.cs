using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class ViewHotelBookingRepository : IViewHotelBookingRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public ViewHotelBookingRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public IEnumerable<VBookingHotelDetail> GetAllHotelBooking()
        {
            var data = context.VBookingHotelDetails;
            return data;
        }

        public IEnumerable<VBookingHotelDetail> GetAllHotelBookingByCOnformation(string ConformationNumber)
        {
            var data = context.VBookingHotelDetails.Where(s=>s.UserConformationNumber==ConformationNumber);
            return data;
        }
    }
}
