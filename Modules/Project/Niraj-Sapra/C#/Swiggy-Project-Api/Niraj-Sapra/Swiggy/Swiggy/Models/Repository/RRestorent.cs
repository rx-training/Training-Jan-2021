using Swiggy.Models.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Swiggy.Models.Repository
{
    public class RRestorent : GenericRepository<Restorent>, IRestorent
    {
        public RRestorent(Swiggy_ProjectContext context) : base(context)
        {

        }
    }
}
