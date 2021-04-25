using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Models.Repository
{
 
    public class BranchRepository : GenericRepository<Customer>, ICustomer
    {
        public BranchRepository(TESTContext context) : base(context)
        {

        }
    }
}
