using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class SeatBookingRepository : SpicjetGenericClass<Seat>, ISeatBookingRepository
    {
        public SeatBookingRepository(SPICEJETContext ctx) : base(ctx)
        {
        }
    }
}
