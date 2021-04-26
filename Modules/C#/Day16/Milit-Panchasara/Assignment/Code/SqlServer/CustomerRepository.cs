using Assignment.Code.Interfaces;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Code.SqlServer
{
    public class CustomerRepository : GenericRepository<Customer>, ICustomerRepository
    {
        public CustomerRepository(ToyCompanyContext _context) : base(_context)
        { }
    }
}
