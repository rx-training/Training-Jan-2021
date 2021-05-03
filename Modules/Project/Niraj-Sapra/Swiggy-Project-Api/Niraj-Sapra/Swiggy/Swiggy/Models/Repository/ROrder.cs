using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Models.Repository
{

    public class ROrder : GenericRepository<Order>, IOrder
    {
        public ROrder(Swiggy_ProjectContext context) : base(context)
        {

        }
    }
}
