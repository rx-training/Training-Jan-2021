using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelBookingCrudRepository : IHotelBookingCrudRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelBookingCrudRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
            
        }
        public IEnumerable<HotelUserDetail> GetAllHotelBooking()
        {
            return context.HotelUserDetails;
        }
    }
}
