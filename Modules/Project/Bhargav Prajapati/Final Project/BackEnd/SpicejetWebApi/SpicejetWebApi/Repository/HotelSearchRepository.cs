using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class HotelSearchRepository : IHotelSearchRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public HotelSearchRepository(ANGULARSPICEJETContext context)
        {

            this.context = context;
        }
        public IEnumerable<VHotelDatum> GetHotel()
        {
            return context.VHotelData;
        }
    }
}
