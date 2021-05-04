using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class SpicejetInfoRepository : SpicjetGenericClass<Spicejetinfo>, ISpicejetInfo
    {
        private readonly SPICEJETContext context;
        public SpicejetInfoRepository(SPICEJETContext ctx) : base(ctx)
        {
            context = ctx;
        }

        
    }
}
