using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models.IRepository;

namespace Day14.Models.Repository
{
    public class ToyRepo : Company<Toy>, IToy
    {
        public ToyRepo(Day14AssignmentContext con) : base(con)
        {

        }
    }
}
