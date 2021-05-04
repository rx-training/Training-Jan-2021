using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class ContectInfoRepository : HotelGenericRepository<Hotelcontectinfo>, IContectInfoRepository
    {
        public ContectInfoRepository(SPICEJETContext context) : base(context)
        {
        }
    }
}
