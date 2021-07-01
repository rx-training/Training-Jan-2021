using Inox.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inox.Models.Repository
{
    public class VTransactionHistoryRepository : GenericRepository<VTransactionHistory>, IVTransactionHistory
    {
        public VTransactionHistoryRepository(inoxContext context) : base(context)
        {

        }
    }
}