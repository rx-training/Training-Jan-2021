using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Day14.Models.IRepository;

namespace Day14.Models.Repository
{
    public class CustomerRepo : Company<Customer>, ICustomer
    {
        public CustomerRepo(Day14AssignmentContext context) : base(context)
        {

        }   
    }
}
