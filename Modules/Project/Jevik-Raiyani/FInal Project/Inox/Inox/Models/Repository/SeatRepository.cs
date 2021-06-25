using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class SeatRepository : GenericRepository<Seat>, ISeat
    {
        public SeatRepository(inoxContext context) : base(context)
        {

        }
    }
}