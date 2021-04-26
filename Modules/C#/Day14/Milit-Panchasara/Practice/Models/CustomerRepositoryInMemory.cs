using Practice.Models.Interfaces;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practice.Models
{
    public class CustomerRepositoryInMemory : ICustomerRepository
    {
        public bool Delete(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> Index()
        {
            var customers = new List<Customer>();
            return customers;
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
