using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class AirportRepository : SpicjetGenericClass<Airport>, IAirPortRepository
    {
        private readonly SPICEJETContext context;
        public AirportRepository(SPICEJETContext ctx) : base(ctx)
        {
            context = ctx;
        }

        public IEnumerable<Airport> GetdatabyId(string AirportName)
        {
            var data = context.Airports.Where(s=>s.AirportName== AirportName);
            return data;
        }
    }
}
