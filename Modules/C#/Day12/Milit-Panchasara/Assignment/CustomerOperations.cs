using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assignment
{
    class CustomerOperations
    {
        public int Insert(Customer customer)
        {
            var context = new ToyCompanyContext();

            context.Customers.Add(customer);
            context.SaveChanges();

            return customer.Id;
        }

        public void InsertAddresses(int customerId, List<string> addressList)
        {
            var context = new ToyCompanyContext();
            foreach (var address in addressList)
            {
                var ca = new CustomerAddress();
                ca.CustomerId = customerId;
                ca.Address = address;
                context.CustomerAddresses.Add(ca);
            }
            context.SaveChanges();
        }

        public bool DeleteUser(int id)
        {
            var context = new ToyCompanyContext();
            var customer = context.Customers.SingleOrDefault(x => x.Id == id);
            if(customer == null)
            {
                return false;
            }
            else
            {
                context.Remove(customer);
                context.SaveChanges();
                return true;
            }
        }

        public Customer? ViewUser(int id)
        {
            var context = new ToyCompanyContext();
            var customer = context.Customers.SingleOrDefault(x => x.Id == id);
            return customer;
        }

        public bool IsExists(int id)
        {
            var context = new ToyCompanyContext();
            if (context.Customers.SingleOrDefault(x => x.Id == id) == null)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        internal void Update(int id, Customer cust)
        {
            var context = new ToyCompanyContext();
            var customer = context.Customers.Single(x => x.Id == id);
            customer.FirstName = cust.FirstName;
            customer.LastName = cust.LastName;
            customer.Email = cust.Email;
            customer.Password = cust.Password;
            customer.ContactNumber = cust.ContactNumber;

            context.SaveChanges();
        }
    }
}
