using Assignment.IRepository;
using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.Repository
{
    public class CustomerRepository : ICustomer
    {
        private readonly ToysComponyDBContext customer;
        public CustomerRepository(ToysComponyDBContext cust)
        {
            customer = cust;
        }

        public void DeleteCustomer(int id)
        {
            var data = customer.Customers.SingleOrDefault(s=>s.CustomerId==id);
            customer.Remove(data);
    
            customer.SaveChanges();
        }

        public IEnumerable<Customer> GetAllCustomer()
        {
           var data = customer.Customers;

            return data;
        }

        public List<Customer> GetCustomerById(int id)
        {
            var data= customer.Customers.Where(s=>s.CustomerId==id).ToList();
            return data;
        }

        public void InsertCustomer(Customer cus)
        {
            customer.Add(cus);
            customer.SaveChanges();
        }

        public void UpdateCustomer(int id, Customer cus)
        {
            var data = customer.Customers.SingleOrDefault(s=>s.CustomerId==id);
            data.CustomerName = cus.CustomerName;
            data.ContectNumber = cus.ContectNumber;
            customer.SaveChanges();

        }
    }
}
