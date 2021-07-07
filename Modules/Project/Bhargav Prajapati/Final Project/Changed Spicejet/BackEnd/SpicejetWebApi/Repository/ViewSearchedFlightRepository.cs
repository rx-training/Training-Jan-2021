using SpicejetWebApi.IRepository;
using SpicejetWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetWebApi.Repository
{
    public class ViewSearchedFlightRepository : IViewSearchedFlightRepository
    {
        private readonly ANGULARSPICEJETDbContext context;
        public ViewSearchedFlightRepository(ANGULARSPICEJETDbContext context)
        {
            this.context = context;
        }
        public IEnumerable<VSearchFlight> GetviewAllFlight()
        {
            var data = context.VSearchFlights;
            return data;
        }
    }
}
