using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class AirportAddressRepository : SpicjetGenericClass<Addressofairport>, IAirportAddressRepository
    {
        public AirportAddressRepository(SPICEJETContext ctx) : base(ctx)
        {
        }
    }
}
