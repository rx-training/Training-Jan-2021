using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class CostRepository : SpicjetGenericClass<Totelcostoftrip>, ICostRepository
    {
        private readonly SPICEJETContext context;
        public CostRepository(SPICEJETContext ctx) : base(ctx)
        {
            context = ctx;
        }

       
    }
}
