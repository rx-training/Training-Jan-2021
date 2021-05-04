using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class HotelRepository : HotelGenericRepository<Hotel>, IHotelRepository
    {
        public HotelRepository(SPICEJETContext context) : base(context)
        {
        }
    }
}
