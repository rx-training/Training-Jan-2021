using Microsoft.EntityFrameworkCore;
using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class FlightTripRepostitory : SpicjetGenericClass<Flighttrip>, IFlightTripRepository
    {
        
        public FlightTripRepostitory(SPICEJETContext ctx) : base(ctx)
        {
           
        }

        
    }
}
