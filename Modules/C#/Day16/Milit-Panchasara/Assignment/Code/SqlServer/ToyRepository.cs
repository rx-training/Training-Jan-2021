using Assignment.Code.Interfaces;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.SqlServer
{
    public class ToyRepository : GenericRepository<Toy>, IToyRepository
    {
        public ToyRepository(ToyCompanyContext context) : base(context)
        {
        }
    }
}
