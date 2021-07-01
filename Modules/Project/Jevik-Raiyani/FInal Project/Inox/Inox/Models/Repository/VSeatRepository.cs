using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class VSeatRepository : GenericRepository<VSeat>, IvSeat
    {
        public VSeatRepository(inoxContext context) : base(context)
    {

    }
}
}
