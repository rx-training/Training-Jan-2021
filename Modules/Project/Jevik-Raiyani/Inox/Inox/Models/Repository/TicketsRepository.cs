using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class TicketsRepository : GenericRepository<Ticket>, ITickets
    {
        public TicketsRepository(inoxContext context) : base(context)
        {

        }
    }
}