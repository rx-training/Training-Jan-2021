using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class SeatTypeRepository : GenericRepository<SeatType>, ISeatType
    {
        public SeatTypeRepository(inoxContext context) : base(context)
        {

        }
    }
}
