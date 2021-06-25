using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class VHistoryRepository : GenericRepository<VHistory>, IvHistory
    {
        public VHistoryRepository(inoxContext context) : base(context)
        {

        }
    }
}