using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class RoomRepository : HotelGenericRepository<Room>, IRoomRepository
    {
        public RoomRepository(SPICEJETContext context) : base(context)
        {
        }
    }
}
