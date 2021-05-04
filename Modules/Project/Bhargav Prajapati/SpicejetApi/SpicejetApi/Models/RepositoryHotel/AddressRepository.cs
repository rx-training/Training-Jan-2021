using SpicejetApi.Models.IRepositoryHotel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositoryHotel
{
    public class AddressRepository : HotelGenericRepository<Address>, IAddressRepository
    {
        public AddressRepository(SPICEJETContext context) : base(context)
        {
        }
    }
}
