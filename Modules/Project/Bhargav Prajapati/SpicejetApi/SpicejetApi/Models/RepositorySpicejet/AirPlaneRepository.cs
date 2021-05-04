using SpicejetApi.Models.IRepositorySpicejet;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpicejetApi.Models.RepositorySpicejet
{
    public class AirPlaneRepository : SpicjetGenericClass<Airplane>, IAirplaneRepository
    {
        public AirPlaneRepository(SPICEJETContext ctx) : base(ctx)
        {
        }
    }
}
