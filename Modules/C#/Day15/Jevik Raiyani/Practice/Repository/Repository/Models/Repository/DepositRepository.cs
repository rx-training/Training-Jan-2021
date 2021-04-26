using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Models.Repository
{
    public class DepositRepository : GenericRepository<Deposit>, IDeposit
    {
        public DepositRepository(TESTContext context) : base(context)
        {

        }
    }
}
