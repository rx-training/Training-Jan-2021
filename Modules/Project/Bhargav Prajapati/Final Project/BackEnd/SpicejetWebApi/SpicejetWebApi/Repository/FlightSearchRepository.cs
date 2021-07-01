using SpicejetAPI.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetAPI.Repository
{
    public class FlightSearchRepository : IFlightSearchRepository
    {
        private readonly ANGULARSPICEJETContext context;
        public FlightSearchRepository(ANGULARSPICEJETContext context)
        {
            this.context = context;
        }

        public IEnumerable<FlightSearch> GetFlight()
        {
            return context.FlightSearches;
        }
    }
}
