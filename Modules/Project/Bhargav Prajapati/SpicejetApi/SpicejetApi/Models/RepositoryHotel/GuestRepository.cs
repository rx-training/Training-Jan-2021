using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class GuestRepository : HotelGenericRepository<Guste>,IGuestRepository
    {
        public GuestRepository(SPICEJETContext context) : base(context)
        {

        }
    }
}
