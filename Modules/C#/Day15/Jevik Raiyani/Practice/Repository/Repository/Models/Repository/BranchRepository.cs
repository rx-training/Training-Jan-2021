using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Models.Repository
{
 
    public class BranchRepository : GenericRepository<Branch>, IBranch
    {
        public BranchRepository(TESTContext context) : base(context)
        {

        }
    }
}
