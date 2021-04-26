using Practice.Models.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models
{
    public class CustomerRepositorySQLServer : ICustomerRepository
    {
        private readonly ToyCompanyContext context;

        public CustomerRepositorySQLServer()
        {
            this.context = new ToyCompanyContext();
        }
        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> Index()
        {
            return context.Customers.ToList();
        }

        public bool Insert(Customer customer)
        {
            throw new NotImplementedException();
        }

        public Customer Show(int id)
        {
            throw new NotImplementedException();
        }

        public Customer Update(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
