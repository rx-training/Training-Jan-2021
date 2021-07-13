using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Models.Repository
{
    public class Rpaymenttable : GenericRepository<Paymenttable>, IPaymenttable
    {
        public Rpaymenttable(Swiggy_ProjectContext context) : base(context)
        {

        }

    }
}
