using PracticeDBAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracticeDBAPI.Repositories
{
    public class CustomerRepository : ICustomer
    {
        private readonly TestDBContext context;

        public CustomerRepository(TestDBContext ctx)
        {
            context = ctx;
        }

        public List<Customer> GetCustomers()
        {
            var cust = context.Customers.ToList();
            return cust;
        }
    }
}
