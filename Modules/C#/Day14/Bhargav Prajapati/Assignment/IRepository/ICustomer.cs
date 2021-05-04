using Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Assignment.IRepository
{
   public interface ICustomer
   {
        IEnumerable<Customer> GetAllCustomer();
        List<Customer> GetCustomerById(int id);
        void InsertCustomer(Customer cus);
        void UpdateCustomer(int id,Customer cus);
        void DeleteCustomer(int id);
   }
}
