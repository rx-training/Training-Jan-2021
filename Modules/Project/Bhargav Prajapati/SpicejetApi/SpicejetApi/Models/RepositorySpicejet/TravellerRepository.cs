using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class TravellerRepository : SpicjetGenericClass<Travelller>, ITravellerRepository
    {
        private readonly SPICEJETContext context;
        public TravellerRepository(SPICEJETContext ctx) : base(ctx)
        {
            context = ctx;
        }

        public Travelller GetByPnrNumber(string PNRNUmber)
        {
            var data = context.Travelllers.Single(s=>s.Pnrno==PNRNUmber);

            return data;
        }
    }
}
