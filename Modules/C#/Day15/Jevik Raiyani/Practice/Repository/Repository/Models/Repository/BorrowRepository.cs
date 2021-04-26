using Repository.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repository.Models.Repository
{
       public class BorrowRepository : GenericRepository<Borrow>, IBorrow
    {
        public BorrowRepository(TESTContext context) : base(context)
        {

        }
    }
}
