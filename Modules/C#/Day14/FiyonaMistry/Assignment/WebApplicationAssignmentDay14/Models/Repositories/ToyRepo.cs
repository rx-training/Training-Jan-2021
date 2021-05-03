using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplicationAssignmentDay14.Models.IRepositories;

namespace WebApplicationAssignmentDay14.Models.Repositories
{
    public class ToyRepo : GenericRepository<Toy>, IToy
    {
        public ToyRepo(ToyManufacturingContext context) : base(context)
        {

        }
    }
}
